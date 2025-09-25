"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reorderService = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const reorderService = async ({ modelName, parentField, parentId, orderedIds, }) => {
    if (!mongoose_1.default.modelNames().includes(modelName)) {
        throw new Error(`Model '${modelName}' not found. Ensure it has been registered with Mongoose.`);
    }
    const model = mongoose_1.default.model(modelName);
    const bulkUpdateOperations = orderedIds.map((_id, index) => ({
        updateOne: {
            filter: {
                _id,
                [parentField]: parentId,
            },
            update: {
                $set: { order: index + 1 },
            },
        },
    }));
    if (bulkUpdateOperations.length === 0) {
        return { ok: 1, nModified: 0 };
    }
    const session = await mongoose_1.default.startSession();
    let result;
    try {
        await session.withTransaction(async (ses) => {
            result = await model.bulkWrite(bulkUpdateOperations, { session: ses });
        });
    }
    finally {
        session.endSession();
    }
    return result;
};
exports.reorderService = reorderService;
//# sourceMappingURL=common.service.js.map