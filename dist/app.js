"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const notFound_1 = require("./middleware/notFound");
const errorHandler_1 = require("./middleware/errorHandler");
const course_routes_1 = __importDefault(require("./routes/course.routes"));
const instructor_routes_1 = __importDefault(require("./routes/instructor.routes"));
const courseCategory_routes_1 = __importDefault(require("./routes/courseCategory.routes"));
const courseVideo_routes_1 = __importDefault(require("./routes/courseVideo.routes"));
const material_routes_1 = __importDefault(require("./routes/material.routes"));
const assignment_routes_1 = __importDefault(require("./routes/assignment.routes"));
const quiz_routes_1 = __importDefault(require("./routes/quiz.routes"));
const app = (0, express_1.default)();
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)({
    origin: process.env.CORS_ORIGIN || "http://localhost:3000",
    credentials: true,
}));
app.use((0, morgan_1.default)("combined"));
app.use(express_1.default.json({ limit: "10mb" }));
app.use(express_1.default.urlencoded({ extended: true }));
app.get("/health", (_, res) => {
    res.status(200).json({
        status: "OK",
        message: "Server is running",
        timestamp: new Date().toISOString(),
    });
});
app.use("/api/instructors", instructor_routes_1.default);
app.use("/api/course-categories", courseCategory_routes_1.default);
app.use("/api/courses", course_routes_1.default);
app.use("/api/course-videos", courseVideo_routes_1.default);
app.use("/api/course-materials", material_routes_1.default);
app.use("/api/course-assignments", assignment_routes_1.default);
app.use("/api/course-quizzes", quiz_routes_1.default);
app.use(notFound_1.notFound);
app.use(errorHandler_1.errorHandler);
exports.default = app;
//# sourceMappingURL=app.js.map