import { z } from "zod";
import mongoose from "mongoose";
export declare const objectIdSchema: z.ZodEffects<z.ZodType<mongoose.Types.ObjectId, z.ZodTypeDef, mongoose.Types.ObjectId>, mongoose.Types.ObjectId, mongoose.Types.ObjectId>;
export type ObjectId = z.infer<typeof objectIdSchema>;
//# sourceMappingURL=common.validation.d.ts.map