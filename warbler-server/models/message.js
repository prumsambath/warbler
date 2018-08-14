const mongoose = require('mongoose');
const messageSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      require: true,
      maxLength: 160,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);

messageSchema.pre('remove', async function(next) {
  try {
    let user = await user.findById(this.user);
    user.messages.remove(this.id);
    await user.save();
    return next();
  } catch (err) {
    next(err);
  }
});

const Message = mongoose.model('Message', messageSchema);
module.exports = Message;
