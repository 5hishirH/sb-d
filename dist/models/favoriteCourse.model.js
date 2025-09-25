"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FavoriteCourse = exports.favoriteCourseSchema = void 0;
const mongoose_1 = require("mongoose");
exports.favoriteCourseSchema = new mongoose_1.Schema({
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    course: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Course",
        required: true,
    },
});
exports.FavoriteCourse = (0, mongoose_1.model)("FavoriteCourse", exports.favoriteCourseSchema);
//# sourceMappingURL=favoriteCourse.model.js.map