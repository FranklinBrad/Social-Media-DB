const { Schema, model } = require("mongoose");
const validator = require("validator");

const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    maxlength: 280,
    minlength: 1,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  userName: {
    type: String,
    required: true,
  },
  reactions: [reactionSchema],

  toJSON: {
    virtuals: true,
  },
  id: false,
});

const reactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId(),
    default: () => new Types.ObjectId(),
  },
  reactionBody: {
    type: String,
    required: true,
    maxlength: 280,
    minlength: 1,
  },
  userName: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
ThoughtSchema.virtual("reactionCount").get(function () {
  return this.reaction.length;
});

const Thought = model("thought", thoughtSchema);

module.exports = Thought;
