"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyEmailView = exports.mimeTypeMap = void 0;
exports.mimeTypeMap = {
    pdf: "application/pdf",
    epub: "application/epub+zip",
};
exports.verifyEmailView = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Verified Successfully</title>
    <!-- Google Fonts: Inter -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <style>
        /* CSS Reset and Base Styles */
        :root {
            --bg-light: #f9fafb;
            --bg-dark: #111827;
            --card-bg-light: #ffffff;
            --card-bg-dark: #1f2937;
            --text-light-primary: #111827;
            --text-dark-primary: #ffffff;
            --text-light-secondary: #4b5563;
            --text-dark-secondary: #d1d5db;
            --text-light-tertiary: #6b7280;
            --text-dark-tertiary: #9ca3af;
            --green-light-bg: #dcfce7;
            --green-dark-bg: rgba(20, 83, 45, 0.5);
            --green-light-icon: #22c55e;
            --green-dark-icon: #4ade80;
            --blue-btn-bg: #2563eb;
            --blue-btn-hover-bg: #1d4ed8;
            --blue-link-light: #2563eb;
            --blue-link-dark: #60a5fa;
        }

        body {
            font-family: 'Inter', sans-serif;
            background-color: var(--bg-light);
            color: var(--text-light-primary);
            margin: 0;
            line-height: 1.5;
        }

        /* Main container for centering content */
        .main-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            padding: 3rem 1rem;
        }

        /* The main content card */
        .content-card {
            width: 100%;
            max-width: 28rem;
            padding: 2rem;
            background-color: var(--card-bg-light);
            border-radius: 1rem;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
            text-align: center;
            box-sizing: border-box;
        }

        /* Icon and its wrapper */
        .icon-wrapper {
            margin: 0 auto 1.5rem;
            width: 5rem;
            height: 5rem;
            background-color: var(--green-light-bg);
            border-radius: 9999px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .success-icon {
            width: 3rem;
            height: 3rem;
            color: var(--green-light-icon);
        }

        /* Typography */
        h1 {
            font-size: 1.875rem;
            font-weight: 700;
            color: var(--text-light-primary);
            margin: 0 0 1rem;
        }

        .success-message {
            color: var(--text-light-secondary);
            margin: 0 0 1.5rem;
        }

        /* Action Button */
        .action-button {
            display: inline-block;
            width: 100%;
            padding: 0.75rem 1.5rem;
            margin-top: 1rem;
            font-size: 1.125rem;
            font-weight: 500;
            letter-spacing: 0.05em;
            color: #ffffff;
            text-transform: uppercase;
            text-decoration: none;
            background-color: var(--blue-btn-bg);
            border-radius: 0.5rem;
            transition: background-color 0.3s ease;
            box-sizing: border-box;
        }

        .action-button:hover {
            background-color: var(--blue-btn-hover-bg);
        }

        .action-button:focus {
            outline: none;
            box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.5);
        }

        /* Footer Links */
        .footer-text {
            padding-top: 1rem;
            font-size: 0.875rem;
            color: var(--text-light-tertiary);
        }

        .footer-text a {
            font-weight: 500;
            color: var(--blue-link-light);
            text-decoration: none;
        }

        .footer-text a:hover {
            text-decoration: underline;
        }

        /* Branding Footer */
        .branding-footer {
            margin-top: 2rem;
            text-align: center;
            font-size: 0.875rem;
            color: var(--text-light-tertiary);
        }

        /* Dark Mode Styles */
        @media (prefers-color-scheme: dark) {
            body {
                background-color: var(--bg-dark);
                color: var(--text-dark-primary);
            }
            .content-card {
                background-color: var(--card-bg-dark);
            }
            .icon-wrapper {
                background-color: var(--green-dark-bg);
            }
            .success-icon {
                color: var(--green-dark-icon);
            }
            h1 {
                color: var(--text-dark-primary);
            }
            .success-message {
                color: var(--text-dark-secondary);
            }
            .footer-text {
                color: var(--text-dark-tertiary);
            }
            .footer-text a {
                color: var(--blue-link-dark);
            }
            .branding-footer {
                color: var(--text-dark-tertiary);
            }
        }

        /* Responsive Styles */
        @media (min-width: 640px) {
            .main-container {
                padding-left: 1.5rem;
                padding-right: 1.5rem;
            }
        }
        @media (min-width: 1024px) {
            .main-container {
                padding-left: 2rem;
                padding-right: 2rem;
            }
        }
    </style>
</head>
<body>
    <div class="main-container">
        <div class="content-card">
            
            <div class="icon-wrapper">
                <svg class="success-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                </svg>
            </div>

            <h1>Email Verified!</h1>

            <p class="success-message">
                Thank you! Your email has been successfully verified. Your account is now active.
            </p>

            <div>
                <a href="#" class="action-button">
                    Continue to Dashboard
                </a>
            </div>

            <div class="footer-text">
                If you did not request this, please ignore this message or contact <a href="#">our support team</a>.
            </div>
        </div>
        
        <footer class="branding-footer">
            <p>&copy; 2025 Your Company. All rights reserved.</p>
        </footer>
    </div>
</body>
</html>
`;
//# sourceMappingURL=constants.js.map