"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const AppliedItemSchema = new mongoose_1.Schema({
    itemType: {
        type: String,
        required: [true, "Item type is required."],
        enum: {
            values: ["Course", "Ebook"],
            message: "{VALUE} is not a supported item type.",
        },
    },
    itemId: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: [true, "Item ID is required."],
    },
}, { _id: false });
const couponSchema = new mongoose_1.Schema({
    code: {
        type: String,
        required: [true, "Coupon code is required."],
        unique: true,
        trim: true,
        uppercase: true,
    },
    discountPercentage: {
        type: Number,
        required: [true, "Discount percentage is required."],
        min: [0, "Discount cannot be negative."],
        max: [100, "Discount cannot exceed 100%."],
    },
    expiry: {
        type: Date,
        required: [true, "Expiry date is required."],
    },
    couponType: {
        type: String,
        required: [true, "Coupon type is required."],
        enum: ["Universal", "Exclusive"],
        default: "Universal",
    },
    appliesTo: {
        type: [AppliedItemSchema],
        required: function () {
            return this.couponType === "Exclusive";
        },
        validate: {
            validator: function (value) {
                if (this.couponType === "Exclusive") {
                    return Array.isArray(value) && value.length > 0;
                }
                return true;
            },
            message: "Exclusive coupons must apply to at least one item.",
        },
    },
}, {
    timestamps: true,
});
couponSchema.pre("validate", function (next) {
    if (this.couponType === "Universal") {
        this.appliesTo = undefined;
    }
    next();
});
const Coupon = mongoose_1.default.model("Coupon", couponSchema);
exports.default = Coupon;
//# sourceMappingURL=coupon.model.js.map