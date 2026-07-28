const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, trim: true },
        email: { type: String, required: true, unique: true, lowercase: true, trim: true },
        phone: { type: String, required: true, trim: true },
        passwordHash: { type: String, required: true },
        address: { type: String, default: "" },
        role: { type: String, enum: ["user", "admin"], default: "user" },
        resetPasswordToken: { type: String },
        resetPasswordExpires: { type: Date },
        refreshToken: { type: String },
    },
    { timestamps: true }
);

// Hash password before save
userSchema.pre("save", async function (next) {
    if (!this.isModified("passwordHash")) return next();
    this.passwordHash = await bcrypt.hash(this.passwordHash, 12);
    next();
});

// Compare password
userSchema.methods.comparePassword = async function (candidatePassword) {
    return bcrypt.compare(candidatePassword, this.passwordHash);
};

// Strip sensitive fields from JSON output
userSchema.methods.toJSON = function () {
    const obj = this.toObject();
    delete obj.passwordHash;
    delete obj.resetPasswordToken;
    delete obj.resetPasswordExpires;
    delete obj.refreshToken;
    return obj;
};

module.exports = mongoose.model("User", userSchema);
