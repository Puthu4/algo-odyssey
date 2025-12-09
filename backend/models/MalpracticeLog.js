import mongoose from "mongoose";

const malpracticeLogSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  challengeId: { type: mongoose.Schema.Types.ObjectId, ref: "Challenge", required: true },
  detectedAt: { type: Date, default: Date.now },
  flags: [{ type: String }],
  plagiarismScore: { type: Number, default: 0 } // value in [0,1]
});

export default mongoose.model("MalpracticeLog", malpracticeLogSchema);
