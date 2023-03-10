import mongoose from "mongoose";

const userSchema = mongoose.Schema(
	{
		service: {
			type: String,
			required: true
		},
		companyName: {
			type: String,
			required: true
		},
		phone: {
			type: Number,
			required: true
		},
		email: {
			type: String,
			required: true
		},
		aadhaar: {
			type: Number,
			required: true
		},
		pan: {
			type: String,
			required: true
		},
		amount: {
			type: Number,
			required: true
		},
		paymentId: {
			type: String
		},
		paymentStatus: {
			type: String
		}
	},
	{ timestamps: true }
);

const userModel = mongoose.model("User", userSchema);
export default userModel;
