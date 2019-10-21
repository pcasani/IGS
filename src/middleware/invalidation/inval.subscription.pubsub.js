'use strict';

const {PubSub} = require('@google-cloud/pubsub');

const pubSubProjectId = process.env.GCP_PROJECT_ID;
const pubSubSubscriptionName = process.env.GCP_PUBSUB_SUBSCRIPTION_NAME;
const pubSubAccessParamsUrl = process.env.GCP_PUBSUB_ACCESS_PARAM_URL;

/**
 * Simple pulls request from GCP pubsub subscription
 * @returns {Promise<void>}
 */
exports.pullFromSubscription = async function () {

    const pubSub = new PubSub({
        "keyFilePath": `"${pubSubAccessParamsUrl}"`
    });
    console.log("Connected to pubsub");

    const [metadata] = await pubSub.subscription(pubSubSubscriptionName).getMetadata();
    const [data] = await pubSub.subscription(pubSubSubscriptionName).getData();

    console.log("Subscription: ${metadata.name}");

    /** Save into GCP Datastore **/

};

/**
 * Full sync pull request from GCP pubsub subscription
 * @returns {Promise<*|Promise<unknown>>}
 */
exports.pullSyncFromSubscription = async function () {

    const pubSubClient = new PubSub.v1.SubscriberClient({
        "keyFilePath": `"${pubSubAccessParamsUrl}"`
    });
    console.log("Connected to pubsub");
    const formattedSubscription = pubSubClient.subscriptionPath(
        pubSubProjectId,
        pubSubSubscriptionName
    );

    /**
     * Set pull request constants
     * @type {number}
     */
    const maxMessages = 100;
    const newAckDeadlineSeconds = 30;
    const timeout = 10000;
    const request = {
        subscription: formattedSubscription,
        maxMessages: maxMessages,
    };

    let isProcessed = false;

    /**
     * @param message
     */
    function storeInDatabase(message) {
        console.log(`Processing "${message.message.data}"...`);

        /** Save to GCP Datastore **/

        setTimeout(() => {
            console.log(`Process completed "${message.message.data}"`);
            isProcessed = true;
        }, 30000);
    }

    const [response] = await pubSubClient.pull(request);
    const message = response.receivedMessages[0];

    storeInDatabase(message);

    let waiting = true;
    while (waiting) {
        await new Promise(r => setTimeout(r, timeout));

        if (isProcessed) {
            const ackRequest = {
                subscription: formattedSubscription,
                ackIds: [message.ackId],
            };

            // Acknowledge to pubSub
            await pubSubClient.acknowledge(ackRequest);
            console.log(`Acknowledged: "${message.message.data}".`);
            // Exit
            waiting = false;
            console.log(`Done`);
        } else {
            // Not yet processed
            const modifyAckRequest = {
                subscription: formattedSubscription,
                ackIds: [message.ackId],
                ackDeadlineSeconds: newAckDeadlineSeconds,
            };

            // Reset the acknowledge time
            await pubSubClient.modifyAckDeadline(modifyAckRequest);

            console.log(
                `Reset acknowledge time "${message.message.data}" for ${newAckDeadlineSeconds}`
            );
        }
    }
};