document.addEventListener('DOMContentLoaded', () => {
    // 1. Inject CSS - STRICTLY HIDDEN BY DEFAULT
    const style = document.createElement('style');
    style.innerHTML = `
        /* Force hidden state so it never interrupts the Index page load */
        #termsModal {
            display: none !important; 
            position: fixed;
            z-index: 999999;
            left: 0; 
            top: 0;
            width: 100%; 
            height: 100%;
            background: rgba(0, 0, 0, 0.9);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            align-items: center;
            justify-content: center;
        }

        #termsModal .terms-content {
            background: #0f172a;
            border: 2px solid #E1AD01;
            border-radius: 20px;
            padding: 25px;
            color: #fff;
            box-shadow: 0 20px 50px rgba(0,0,0,1);
            width: 95%;
            max-width: 750px;
            max-height: 85vh;
            display: flex;
            flex-direction: column;
            animation: termsFadeIn 0.3s ease-out;
        }

        @keyframes termsFadeIn {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
        }

        .terms-scroll-area {
            overflow-y: auto;
            padding-right: 15px;
            line-height: 1.6;
            font-size: 0.95rem;
            border-top: 1px solid rgba(225, 173, 1, 0.2);
            padding-top: 15px;
            text-align: left;
            flex-grow: 1;
        }

        /* Custom Gold Scrollbar */
        .terms-scroll-area::-webkit-scrollbar { width: 6px; }
        .terms-scroll-area::-webkit-scrollbar-track { background: rgba(255, 255, 255, 0.05); }
        .terms-scroll-area::-webkit-scrollbar-thumb { background: #E1AD01; border-radius: 10px; }

        @media (max-width: 600px) {
            #termsModal .terms-content { padding: 20px; width: 90%; }
            #termsModal h2 { font-size: 1.2rem !important; }
            .terms-scroll-area { font-size: 0.85rem; }
        }
    `;
    document.head.appendChild(style);

    // 2. Inject the HTML (Last Updated April 2026)
    const termsModalHTML = `
    <div id="termsModal">
      <div class="terms-content">
        <h2 style="color: #E1AD01; margin: 0 0 5px 0; text-align:center; text-transform: uppercase; font-family: sans-serif;">Website Terms & Conditions</h2>
        <p style="font-size:0.7rem; color:#888; text-align:center; margin-bottom:15px;">Hulutech (Pty) Ltd | South Africa | 2026</p>

        <div class="terms-scroll-area">
          <h3 style="color:#E1AD01; font-size:1rem; margin-top:0;">1. Introduction</h3>
          <p>Welcome to Hulutech. These terms govern your use of our website and services.</p>

          <h3 style="color:#E1AD01; font-size:1rem; margin-top:15px;">2. Regulatory Compliance</h3>
          <p>We operate in accordance with the <strong>Protection of Personal Information Act (POPIA)</strong> and the <strong>Electronic Communications and Transactions Act (ECTA)</strong> of South Africa.</p>

          <h3 style="color:#E1AD01; font-size:1rem; margin-top:15px;">3. Intellectual Property</h3>
          <p>All brand assets, software descriptions, and content are the exclusive property of Hulutech (Pty) Ltd.</p>

          <h3 style="color:#E1AD01; font-size:1rem; margin-top:15px;">4. Limitation of Liability</h3>
          <p>Hulutech provides this site "as is" and is not liable for any technical interruptions or third-party links.</p>

          <h3 style="color:#E1AD01; font-size:1rem; margin-top:15px;">5. Contact</h3>
          <p>For legal inquiries: <strong>info@hulutech.co.za</strong></p>
        </div>

        <button id="closeTermsBtn" style="margin-top:20px; width:100%; padding:15px; background:#E1AD01; border:none; color:#000; font-weight:bold; border-radius:10px; cursor:pointer; text-transform:uppercase;">Close & Return</button>
      </div>
    </div>`;

    document.body.insertAdjacentHTML('beforeend', termsModalHTML);

    const termsModal = document.getElementById("termsModal");

    // 3. Logic to handle the click from your <li> link
    document.addEventListener('click', function(e) {
        // Detect click on the link with id="termsLink"
        const trigger = e.target.closest('#termsLink');

        if (trigger) {
            e.preventDefault();
            // Reveal the modal only when clicked
            termsModal.style.setProperty('display', 'flex', 'important'); 
            document.body.style.overflow = "hidden"; // Prevent index page scroll
        }

        // Close logic (Button or clicking the backdrop)
        if (e.target.id === 'closeTermsBtn' || e.target === termsModal) {
            termsModal.style.setProperty('display', 'none', 'important');
            document.body.style.overflow = ""; // Restore index page scroll
        }
    });
});