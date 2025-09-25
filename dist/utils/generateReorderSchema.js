"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateReorderSchema = void 0;
const common_validation_1 = require("../features/v1/common.validation");
const mongoose_1 = __importDefault(require("mongoose"));
const zod_1 = __importDefault(require("zod"));
const generateReorderSchema = ({ parentModel, candidateModel, paramName, candidateFieldNameForParent, }) => zod_1.default
    .object({
    params: zod_1.default.object({
        [paramName]: common_validation_1.objectIdSchema,
    }),
    body: zod_1.default.object({
        orderedIds: zod_1.default
            .array(common_validation_1.objectIdSchema)
            .nonempty(`At least one ID must be provided.`),
    }),
})
    .refine(async (data) => {
    const parentExists = await mongoose_1.default.model(parentModel).exists({
        _id: data.params[paramName],
    });
    return !!parentExists;
}, {
    message: `${parentModel} with the request id does not exist`,
    path: [`${paramName}`],
})
    .refine(async ({ params, body }) => {
    try {
        const parentId = params[paramName];
        const itemIds = body["orderedIds"];
        const dbItemIds = await mongoose_1.default
            .model(candidateModel)
            .find({
            [candidateFieldNameForParent]: new mongoose_1.default.Types.ObjectId(parentId),
        }, "_id")
            .lean();
        const requestIdsSet = new Set(itemIds);
        const dbIdsSet = new Set(dbItemIds);
        if (requestIdsSet.size !== dbIdsSet.size) {
            return false;
        }
        for (const id of requestIdsSet) {
            if (!dbIdsSet.has(id)) {
                return false;
            }
        }
        return true;
    }
    catch (error) {
        return false;
    }
}, {
    message: `The provided ${candidateModel} IDs do not represent the complete and exact set of ${candidateModel}s for the ${parentModel}. Ensure all ${candidateModel}s are included and no extra IDs are present.`,
    path: ["orderedIds"],
});
exports.generateReorderSchema = generateReorderSchema;
//# sourceMappingURL=generateReorderSchema.js.map