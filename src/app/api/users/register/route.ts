import { connectDB } from "@/config/database";
import { getErrorMessage } from "@/lib/utils";
import { User } from "@/models";
import * as bcryptjs from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

connectDB();

export async function POST(request: NextRequest) {
  // const { HASH_SECRET } = EnvVariables;
  try {
    const reqBody = await request.json();
    const { username, email, password } = reqBody;

    // check if user already exits
    const user = await User.findOne({ email });

    if (user) {
      return NextResponse.json(
        {
          error: "User already exits"
        },
        {
          status: 400
        }
      );
    }

    // hash the password
    // const hashedPassword = await hashPassword(password);
    // const hashedPassword = await argon2.hash(password, {
    //   secret: Buffer.from(HASH_SECRET)
    // });
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword
    });

    const savedUser = await newUser.save();
    console.log(savedUser);

    return NextResponse.json(
      {
        message: "User created successfully",
        success: true,
        savedUser
      },
      {
        status: 201
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        error: getErrorMessage(error)
      },
      {
        status: 500
      }
    );
  }
}
