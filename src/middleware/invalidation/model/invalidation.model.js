"use strict";

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/pubsub',
        {useNewUrlParser: true},
        () => console.log("connected to DB!")
);
const Schema = mongoose.Schema;

const invalidationSchema = new Schema({
    attributes: {
        jti: String,
        revoked_at: String,
        user_id: Number
    },
    messageId: String,
    publishTime: Number
});

/**
 * Search database for jti values
 * @param cb
 * @returns {*}
 */
invalidationSchema.findByJti = function (cb) {
    return this.model('Invalidation').find({id: this.id}, cb);
};

const Invalidation = mongoose.model('Invalidation', invalidationSchema);

/**
 * Find by Jti
 * @param jti
 * @returns {*}
 */
exports.findByJti = (jtiVal) => {
    return Invalidation.find({jti: jtiVal});
};

