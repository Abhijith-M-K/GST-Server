import mongoose from "mongoose";

const connectDB = async () => {
	try {
		const conn = await mongoose.connect("mongodb+srv://abhijith:abhi123@cluster0.o6v9gwu.mongodb.net/ecfile", {
			useNewUrlParser: true,
			useUnifiedTopology: true
		});
		console.log(`MongoDB connected : ${conn.connection.host}`.cyan.underline);
	} catch (error) {
		console.log(error);
	}
};

export default connectDB;
