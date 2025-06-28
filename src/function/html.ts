export const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vaultly - Secure Message Storage</title>
    <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        :root {
            --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            --secondary-gradient: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
            --success-gradient: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
            --danger-gradient: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
            
            /* Light mode */
            --bg-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            --bg-secondary: #ffffff;
            --bg-card: rgba(255, 255, 255, 0.95);
            --text-primary: #2d3748;
            --text-secondary: #4a5568;
            --text-muted: #718096;
            --border-color: rgba(226, 232, 240, 0.8);
            --shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
            --input-bg: #ffffff;
            --input-border: #e2e8f0;
        }

        [data-theme="dark"] {
            --bg-primary: linear-gradient(135deg, #1a202c 0%, #2d3748 100%);
            --bg-secondary: #1a202c;
            --bg-card: rgba(45, 55, 72, 0.95);
            --text-primary: #f7fafc;
            --text-secondary: #e2e8f0;
            --text-muted: #a0aec0;
            --border-color: rgba(74, 85, 104, 0.8);
            --shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
            --input-bg: #2d3748;
            --input-border: #4a5568;
        }

        body {
            font-family: 'Comfortaa', cursive;
            background: var(--bg-primary);
            min-height: 100vh;
            color: var(--text-primary);
            transition: all 0.3s ease;
            position: relative;
            overflow-x: hidden;
        }

        /* Animated Background */
        .bg-animation {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            overflow: hidden;
        }

        .floating-shapes {
            position: absolute;
            width: 100%;
            height: 100%;
        }

        .shape {
            position: absolute;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 50%;
            animation: float 20s infinite linear;
        }

        .shape:nth-child(1) {
            width: 80px;
            height: 80px;
            left: 10%;
            animation-delay: 0s;
            animation-duration: 25s;
        }

        .shape:nth-child(2) {
            width: 120px;
            height: 120px;
            left: 20%;
            animation-delay: 5s;
            animation-duration: 30s;
        }

        .shape:nth-child(3) {
            width: 60px;
            height: 60px;
            left: 70%;
            animation-delay: 10s;
            animation-duration: 20s;
        }

        .shape:nth-child(4) {
            width: 100px;
            height: 100px;
            left: 80%;
            animation-delay: 15s;
            animation-duration: 35s;
        }

        .shape:nth-child(5) {
            width: 40px;
            height: 40px;
            left: 50%;
            animation-delay: 20s;
            animation-duration: 15s;
        }

        @keyframes float {
            0% {
                transform: translateY(100vh) rotate(0deg);
                opacity: 0;
            }
            10% {
                opacity: 1;
            }
            90% {
                opacity: 1;
            }
            100% {
                transform: translateY(-100px) rotate(360deg);
                opacity: 0;
            }
        }

        /* Gradient orbs */
        .gradient-orb {
            position: absolute;
            border-radius: 50%;
            filter: blur(60px);
            opacity: 0.3;
            animation: pulse 4s ease-in-out infinite;
        }

        .gradient-orb:nth-child(1) {
            width: 300px;
            height: 300px;
            background: linear-gradient(45deg, #667eea, #764ba2);
            top: 20%;
            left: 10%;
            animation-delay: 0s;
        }

        .gradient-orb:nth-child(2) {
            width: 200px;
            height: 200px;
            background: linear-gradient(45deg, #f093fb, #f5576c);
            top: 60%;
            right: 10%;
            animation-delay: 2s;
        }

        .gradient-orb:nth-child(3) {
            width: 250px;
            height: 250px;
            background: linear-gradient(45deg, #4facfe, #00f2fe);
            bottom: 20%;
            left: 30%;
            animation-delay: 1s;
        }

        @keyframes pulse {
            0%, 100% {
                transform: scale(1);
                opacity: 0.3;
            }
            50% {
                transform: scale(1.2);
                opacity: 0.5;
            }
        }

        .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 2rem;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            position: relative;
            z-index: 1;
        }

        .header {
            text-align: center;
            margin-bottom: 3rem;
            animation: fadeInUp 1s ease;
        }

        .logo {
            font-size: 4rem;
            font-weight: 700;
            background: linear-gradient(135deg, #ffffff 0%, #f0f8ff 50%, #ffffff 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 1rem;
            text-shadow: 0 0 30px rgba(255, 255, 255, 0.5);
            animation: glow 2s ease-in-out infinite alternate;
        }

        @keyframes glow {
            from {
                text-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
            }
            to {
                text-shadow: 0 0 40px rgba(255, 255, 255, 0.8);
            }
        }

        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .subtitle {
            color: rgba(255, 255, 255, 0.9);
            font-size: 1.1rem;
            margin-bottom: 1rem;
            font-weight: 400;
        }

        /* Enhanced GitHub Star Section */
        .github-star-section {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            color: rgba(255, 255, 255, 0.9);
            font-size: 0.95rem;
            transition: all 0.3s ease;
            cursor: pointer;
            padding: 0.75rem 1.5rem;
            border-radius: 50px;
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            text-decoration: none;
        }

        .github-star-section:hover {
            transform: translateY(-2px);
            background: rgba(255, 255, 255, 0.15);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }

        .star-icon {
            font-size: 1.2rem;
            animation: starPulse 2s ease-in-out infinite;
        }

        @keyframes starPulse {
            0%, 100% {
                transform: scale(1);
            }
            50% {
                transform: scale(1.2);
            }
        }

        .github-star-section:hover .star-icon {
            animation: starSpin 0.6s ease-in-out;
        }

        @keyframes starSpin {
            0% {
                transform: scale(1) rotate(0deg);
            }
            50% {
                transform: scale(1.3) rotate(180deg);
            }
            100% {
                transform: scale(1) rotate(360deg);
            }
        }

        .theme-toggle {
            position: absolute;
            top: 2rem;
            right: 2rem;
            background: var(--bg-card);
            border: 1px solid var(--border-color);
            border-radius: 50px;
            padding: 0.5rem;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: var(--shadow);
            z-index: 10;
        }

        .theme-toggle:hover {
            transform: scale(1.1);
        }

        .main-content {
            width: 100%;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
            margin-bottom: 2rem;
            animation: fadeInUp 1s ease 0.3s both;
        }

        .card {
            background: var(--bg-card);
            border-radius: 20px;
            padding: 2rem;
            box-shadow: var(--shadow);
            border: 1px solid var(--border-color);
            backdrop-filter: blur(10px);
            transition: all 0.3s ease;
        }

        .card:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
        }

        .card-title {
            font-size: 1.5rem;
            font-weight: 600;
            margin-bottom: 1.5rem;
            text-align: center;
        }

        .form-group {
            margin-bottom: 1.5rem;
        }

        .form-label {
            display: block;
            margin-bottom: 0.5rem;
            font-weight: 500;
            color: var(--text-secondary);
        }

        .form-input {
            width: 100%;
            padding: 0.75rem 1rem;
            border: 2px solid var(--input-border);
            border-radius: 10px;
            background: var(--input-bg);
            color: var(--text-primary);
            font-size: 1rem;
            font-family: 'Comfortaa', cursive;
            transition: all 0.3s ease;
        }

        .form-input:focus {
            outline: none;
            border-color: #667eea;
            box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }

        .form-textarea {
            min-height: 100px;
            resize: vertical;
        }

        /* Enhanced Toggle Switch */
        .toggle-container {
            display: flex;
            align-items: center;
            gap: 1rem;
            margin-top: 0.5rem;
        }

        .toggle-switch {
            position: relative;
            width: 60px;
            height: 30px;
            background: var(--input-border);
            border-radius: 30px;
            cursor: pointer;
            transition: all 0.3s ease;
            border: 2px solid var(--input-border);
        }

        .toggle-switch.active {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border-color: #667eea;
            box-shadow: 0 0 20px rgba(102, 126, 234, 0.3);
        }

        .toggle-slider {
            position: absolute;
            top: 2px;
            left: 2px;
            width: 22px;
            height: 22px;
            background: white;
            border-radius: 50%;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
        }

        .toggle-switch.active .toggle-slider {
            transform: translateX(28px);
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
        }

        .toggle-label {
            font-weight: 500;
            color: var(--text-secondary);
            cursor: pointer;
            transition: color 0.3s ease;
        }

        .toggle-switch.active + .toggle-label {
            color: #667eea;
        }

        .btn {
            width: 100%;
            padding: 0.75rem 1.5rem;
            border: none;
            border-radius: 10px;
            font-size: 1rem;
            font-weight: 600;
            font-family: 'Comfortaa', cursive;
            cursor: pointer;
            transition: all 0.3s ease;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .btn-primary {
            background: var(--primary-gradient);
            color: white;
        }

        .btn-secondary {
            background: var(--secondary-gradient);
            color: white;
        }

        .btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }

        .btn:active {
            transform: translateY(0);
        }

        .result-section {
            width: 100%;
            margin-top: 2rem;
        }

        .result-card {
            background: var(--bg-card);
            border-radius: 15px;
            padding: 1.5rem;
            box-shadow: var(--shadow);
            border: 1px solid var(--border-color);
            backdrop-filter: blur(10px);
            display: none;
        }

        .result-card.show {
            display: block;
            animation: slideIn 0.3s ease;
        }

        @keyframes slideIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .result-title {
            font-size: 1.2rem;
            font-weight: 600;
            margin-bottom: 1rem;
        }

        .result-content {
            background: var(--input-bg);
            border: 1px solid var(--input-border);
            border-radius: 8px;
            padding: 1rem;
            font-family: 'Courier New', monospace;
            white-space: pre-wrap;
            word-break: break-all;
            position: relative;
        }

        /* Copy ID Container */
        .copy-id-container {
            position: relative;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            background: var(--input-bg);
            border: 1px solid var(--input-border);
            border-radius: 8px;
            padding: 1rem;
            margin-top: 1rem;
        }

        .message-id {
            flex: 1;
            font-family: 'Courier New', monospace;
            font-size: 0.9rem;
            word-break: break-all;
            color: var(--text-primary);
        }

        .copy-btn {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border: none;
            border-radius: 6px;
            padding: 0.5rem 1rem;
            cursor: pointer;
            font-family: 'Comfortaa', cursive;
            font-weight: 600;
            font-size: 0.8rem;
            transition: all 0.3s ease;
            white-space: nowrap;
        }

        .copy-btn:hover {
            transform: translateY(-1px);
            box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
        }

        .copy-btn.copied {
            background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
            animation: copySuccess 0.3s ease;
        }

        @keyframes copySuccess {
            0% {
                transform: scale(1);
            }
            50% {
                transform: scale(1.05);
            }
            100% {
                transform: scale(1);
            }
        }

        .error {
            color: #e53e3e;
            background: rgba(229, 62, 62, 0.1);
            border-color: rgba(229, 62, 62, 0.3);
        }

        .success {
            color: #38a169;
            background: rgba(56, 161, 105, 0.1);
            border-color: rgba(56, 161, 105, 0.3);
        }

        .loading {
            display: inline-block;
            width: 20px;
            height: 20px;
            border: 3px solid rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            border-top-color: #fff;
            animation: spin 1s ease-in-out infinite;
        }

        @keyframes spin {
            to { transform: rotate(360deg); }
        }

        @media (max-width: 768px) {
            .main-content {
                grid-template-columns: 1fr;
            }
            
            .container {
                padding: 1rem;
            }
            
            .theme-toggle {
                top: 1rem;
                right: 1rem;
            }
            
            .logo {
                font-size: 2.5rem;
            }

            .copy-id-container {
                flex-direction: column;
                align-items: stretch;
            }

            .copy-btn {
                align-self: center;
                width: fit-content;
            }
        }
    </style>
</head>
<body>
    <!-- Animated Background -->
    <div class="bg-animation">
        <div class="floating-shapes">
            <div class="shape"></div>
            <div class="shape"></div>
            <div class="shape"></div>
            <div class="shape"></div>
            <div class="shape"></div>
        </div>
        <div class="gradient-orb"></div>
        <div class="gradient-orb"></div>
        <div class="gradient-orb"></div>
    </div>

    <div class="theme-toggle" onclick="toggleTheme()">
        <span id="theme-icon">🌙</span>
    </div>

    <div class="container">
        <div class="header">
            <h1 class="logo">Vaultly</h1>
            <p class="subtitle">Secure Message Storage & Retrieval</p>
            <a href="https://github.com/xcfio/vaultly" target="_blank" class="github-star-section">
                <span class="star-icon">⭐</span>
                <span>Star us on GitHub if you love this project!</span>
            </a>
        </div>

        <div class="main-content">
            <!-- Create Message Card -->
            <div class="card">
                <h2 class="card-title">Create Message</h2>
                <form id="createForm">
                    <div class="form-group">
                        <label class="form-label" for="createKey">Encryption Key</label>
                        <input type="text" id="createKey" class="form-input" placeholder="Enter encryption key" required>
                    </div>
                    <div class="form-group">
                        <label class="form-label" for="createMessage">Message</label>
                        <textarea id="createMessage" class="form-input form-textarea" placeholder="Enter your secret message" required></textarea>
                    </div>
                    <div class="form-group">
                        <label class="form-label" for="createExpires">Expires At (Optional)</label>
                        <input type="datetime-local" id="createExpires" class="form-input">
                    </div>
                    <div class="form-group">
                        <label class="form-label">One-time Access</label>
                        <div class="toggle-container">
                            <div class="toggle-switch" id="oneTimeToggle" onclick="toggleOneTime()">
                                <div class="toggle-slider"></div>
                            </div>
                            <label class="toggle-label" onclick="toggleOneTime()">One-time access only</label>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary">
                        <span id="createBtnText">Create Message</span>
                    </button>
                </form>
            </div>

            <!-- Retrieve Message Card -->
            <div class="card">
                <h2 class="card-title">Retrieve Message</h2>
                <form id="retrieveForm">
                    <div class="form-group">
                        <label class="form-label" for="retrieveId">Message ID</label>
                        <input type="text" id="retrieveId" class="form-input" placeholder="Enter message ID" required>
                    </div>
                    <div class="form-group">
                        <label class="form-label" for="retrieveKey">Decryption Key</label>
                        <input type="text" id="retrieveKey" class="form-input" placeholder="Enter decryption key" required>
                    </div>
                    <button type="submit" class="btn btn-secondary">
                        <span id="retrieveBtnText">Retrieve Message</span>
                    </button>
                </form>
            </div>
        </div>

        <!-- Results Section -->
        <div class="result-section">
            <div id="resultCard" class="result-card">
                <h3 class="result-title" id="resultTitle">Result</h3>
                <div class="result-content" id="resultContent"></div>
                <div id="copyIdContainer" class="copy-id-container" style="display: none;">
                    <div class="message-id" id="messageId"></div>
                    <button class="copy-btn" id="copyBtn" onclick="copyMessageId()">Copy ID</button>
                </div>
            </div>
        </div>
    </div>

    <script>
        let oneTimeEnabled = false;

        // Toggle switch functionality
        function toggleOneTime() {
           oneTimeEnabled = !oneTimeEnabled;
           const toggle = document.getElementById('oneTimeToggle');

           if (oneTimeEnabled) {
               toggle.classList.add('active');
           } else {
               toggle.classList.remove('active');
           }
        }

        // Copy message ID functionality
        function copyMessageId() {
           const messageId = document.getElementById('messageId').textContent;
           const copyBtn = document.getElementById('copyBtn');

           navigator.clipboard.writeText(messageId).then(() => {
               copyBtn.textContent = 'Copied!';
               copyBtn.classList.add('copied');

               setTimeout(() => {
                   copyBtn.textContent = 'Copy ID';
                   copyBtn.classList.remove('copied');
               }, 2000);
           }).catch(() => {
               // Fallback for older browsers
               const textArea = document.createElement('textarea');
               textArea.value = messageId;
               document.body.appendChild(textArea);
               textArea.select();
               document.execCommand('copy');
               document.body.removeChild(textArea);

               copyBtn.textContent = 'Copied!';
               copyBtn.classList.add('copied');

               setTimeout(() => {
                   copyBtn.textContent = 'Copy ID';
                   copyBtn.classList.remove('copied');
               }, 2000);
           });
        }

        // Theme management
        function toggleTheme() {
           const html = document.documentElement;
           const themeIcon = document.getElementById('theme-icon');
           const currentTheme = html.getAttribute('data-theme');

           if (currentTheme === 'dark') {
               html.removeAttribute('data-theme');
               themeIcon.textContent = '🌙';
               // Don't use localStorage in artifacts
           } else {
               html.setAttribute('data-theme', 'dark');
               themeIcon.textContent = '☀️';
               // Don't use localStorage in artifacts
           }
        }

        // Initialize theme
        function initTheme() {
           const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
           const themeIcon = document.getElementById('theme-icon');

           if (prefersDark) {
               document.documentElement.setAttribute('data-theme', 'dark');
               themeIcon.textContent = '☀️';
           } else {
               themeIcon.textContent = '🌙';
           }
        }

        // API functions
        async function createMessage(data) {
           const response = await fetch('/message', {
               method: 'PUT',
               headers: {
                   'Content-Type': 'application/json',
               },
               body: JSON.stringify(data)
           });
           return response.json();
        }

        async function retrieveMessage(data) {
           const response = await fetch('/message', {
               method: 'POST',
               headers: {
                   'Content-Type': 'application/json',
               },
               body: JSON.stringify(data)
           });
           return response.json();
        }

        // UI functions
        function showResult(title, content, isError = false, messageId = null) {
           const resultCard = document.getElementById('resultCard');
           const resultTitle = document.getElementById('resultTitle');
           const resultContent = document.getElementById('resultContent');
           const copyIdContainer = document.getElementById('copyIdContainer');
           const messageIdElement = document.getElementById('messageId');

           resultTitle.textContent = title;
           resultContent.textContent = content;
           resultContent.className = \`result-content \${isError ? 'error' : 'success'}\`;

           if (messageId && !isError) {
               messageIdElement.textContent = messageId;
               copyIdContainer.style.display = 'flex';
           } else {
               copyIdContainer.style.display = 'none';
           }

           resultCard.classList.add('show');
           resultCard.scrollIntoView({ behavior: 'smooth' });
        }

        function hideResult() {
           document.getElementById('resultCard').classList.remove('show');
        }

        function setLoading(formId, isLoading) {
           const btnTextId = formId === 'createForm' ? 'createBtnText' : 'retrieveBtnText';
           const btnText = document.getElementById(btnTextId);
           const form = document.getElementById(formId);
           const submitBtn = form.querySelector('button[type="submit"]');

           if (isLoading) {
               btnText.innerHTML = '<span class="loading"></span>';
               submitBtn.disabled = true;
           } else {
               btnText.textContent = formId === 'createForm' ? 'Create Message' : 'Retrieve Message';
               submitBtn.disabled = false;
           }
        }

        // Form handlers
        document.getElementById('createForm').addEventListener('submit', async (e) => {
           e.preventDefault();
           hideResult();
           setLoading('createForm', true);

           try {
               const data = {
                   key: document.getElementById('createKey').value,
                   message: document.getElementById('createMessage').value,
                   one_time: oneTimeEnabled
               };

               const expires = document.getElementById('createExpires').value;
               if (expires) {
                   data.expires = new Date(expires).toISOString();
               }

               const result = await createMessage(data);

               if (result.error) {
                   showResult('Error', result.error, true);
               } else {
                   const successMessage = \`Message created successfully!\n\nExpires: \${new Date(result.expires).toLocaleString() || 'Never'}\nOne-time: \${result.one_time ? 'Yes' : 'No'}\n\nShare the Message ID below with the recipient to retrieve the message.\`;
                   showResult('Success', successMessage, false, result.id);
                   e.target.reset();
                   oneTimeEnabled = false;
                   document.getElementById('oneTimeToggle').classList.remove('active');
               }
           } catch (error) {
               showResult('Error', \`Failed to create message: \${error.message}\`, true);
           } finally {
               setLoading('createForm', false);
           }
        });

        document.getElementById('retrieveForm').addEventListener('submit', async (e) => {
           e.preventDefault();
           hideResult();
           setLoading('retrieveForm', true);

           try {
               const data = {
                   id: document.getElementById('retrieveId').value,
                   key: document.getElementById('retrieveKey').value
               };

               const result = await retrieveMessage(data);

               if (result.error) {
                   showResult('Error', result.error, true);
               } else {
                   showResult('Message Retrieved', result.message);
                   e.target.reset();
               }
           } catch (error) {
               showResult('Error', \`Failed to retrieve message: \${error.message}\`, true);
           } finally {
               setLoading('retrieveForm', false);
           }
        });
    </script>
</body>
</html>
`
