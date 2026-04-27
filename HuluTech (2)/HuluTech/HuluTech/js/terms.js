document.addEventListener('DOMContentLoaded', () => {
    // 1. Inject Responsive & Custom Scrollbar CSS
    const style = document.createElement('style');
    style.innerHTML = `
        #termsModal {
            display: none;
            position: fixed;
            z-index: 999999;
            left: 0; top: 0;
            width: 100%; height: 100%;
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
            max-height: 90vh;
            display: flex;
            flex-direction: column;
            animation: termsFadeIn 0.4s ease;
        }

        @keyframes termsFadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }

        /* Custom Scrollbar for smooth mobile experience */
        .terms-scroll-area {
            overflow-y: auto;
            padding-right: 10px;
            line-height: 1.6;
            font-size: 0.9rem;
            border-top: 1px solid rgba(225, 173, 1, 0.2);
            padding-top: 15px;
            text-align: left;
            flex-grow: 1;
            scroll-behavior: smooth;
        }

        .terms-scroll-area::-webkit-scrollbar {
            width: 6px;
        }
        .terms-scroll-area::-webkit-scrollbar-track {
            background: rgba(255, 255, 255, 0.05);
        }
        .terms-scroll-area::-webkit-scrollbar-thumb {
            background: #E1AD01;
            border-radius: 10px;
        }

        @media (max-width: 600px) {
            #termsModal .terms-content { padding: 20px; width: 92%; }
            #termsModal h2 { font-size: 1.3rem !important; }
            .terms-scroll-area { font-size: 0.85rem; }
            #closeTermsBtn { padding: 12px; font-size: 0.9rem; }
        }
    `;
    document.head.appendChild(style);

    // 2. Inject the Detailed HTML Modal
    const termsModalHTML = `
    <div id="termsModal">
      <div class="terms-content">
        <h2 style="color: #E1AD01; margin-top:0; text-align:center; text-transform: uppercase;">Website Terms and Conditions</h2>
        <p style="font-size:0.75rem; color:#888; text-align:center; margin-bottom:15px;">Hulutech (Pty) Ltd | Last Updated: 2 April 2026</p>

        <div class="terms-scroll-area">
          <h3 style="color:#E1AD01; font-size:1.1rem; margin-top:0;">1. Introduction</h3>
          <p>Welcome to the Hulutech website. These Terms and Conditions govern your use of our website and related services provided by Hulutech (Pty) Ltd.</p>

          <h3 style="color:#E1AD01; font-size:1.1rem; margin-top:15px;">2. Company Information</h3>
          <p>This website is operated by Hulutech (Pty) Ltd, South Africa. Contact: <strong>info@hulutech.co.za</strong>.</p>

          <h3 style="color:#E1AD01; font-size:1.1rem; margin-top:15px;">3. Use of the Website</h3>
          <p>Users agree to use the website for lawful purposes only and not engage in activities that damage or disrupt our systems.</p>

          <h3 style="color:#E1AD01; font-size:1.1rem; margin-top:15px;">4. Intellectual Property</h3>
          <p>All content, including text, graphics, logos, and software, is the property of Hulutech and is protected under applicable laws.</p>

          <h3 style="color:#E1AD01; font-size:1.1rem; margin-top:15px;">5. Content Disclaimer</h3>
          <p>Information is for general purposes only. Hulutech makes no guarantees regarding the completeness of the information.</p>

          <h3 style="color:#E1AD01; font-size:1.1rem; margin-top:15px;">6. Limitation of Liability</h3>
          <p>Hulutech will not be liable for any damages or business interruption arising from the use of this website.</p>

          <h3 style="color:#E1AD01; font-size:1.1rem; margin-top:15px;">7. Third-Party Links</h3>
          <p>We are not responsible for the content or policies of external websites linked on our platform.</p>

          <h3 style="color:#E1AD01; font-size:1.1rem; margin-top:15px;">8. Privacy</h3>
          <p>Your use of this website is governed by our Privacy Policy in accordance with <strong>POPIA</strong>.</p>

          <h3 style="color:#E1AD01; font-size:1.1rem; margin-top:15px;">9. Website Availability</h3>
          <p>We do not guarantee uninterrupted access and may suspend the site for maintenance at any time.</p>

          <h3 style="color:#E1AD01; font-size:1.1rem; margin-top:15px;">10. Prohibited Activities</h3>
          <p>Users may not attempt to hack or use automated bots. Violations may result in legal action.</p>

          <h3 style="color:#E1AD01; font-size:1.1rem; margin-top:15px;">11. Indemnification</h3>
          <p>You agree to hold Hulutech harmless from any claims arising from your misuse of the website.</p>

          <h3 style="color:#E1AD01; font-size:1.1rem; margin-top:15px;">12. Governing Law</h3>
          <p>These terms are governed by the laws of the Republic of South Africa, including ECTA and CPA.</p>

          <h3 style="color:#E1AD01; font-size:1.1rem; margin-top:15px;">13. Changes to Terms</h3>
          <p>Hulutech may update these terms periodically. Continued use constitutes acceptance of revised terms.</p>

          <h3 style="color:#E1AD01; font-size:1.1rem; margin-top:15px;">14. Contact Information</h3>
          <p>Hulutech (Pty) Ltd<br>Email: info@hulutech.co.za<br>Website: www.hulutech.co.za</p>
        </div>

        <button id="closeTermsBtn" style="margin-top:20px; width:100%; padding:14px; background:#E1AD01; border:none; color:#000; font-weight:900; border-radius:10px; cursor:pointer; text-transform:uppercase;">Close & Return</button>
      </div>
    </div>`;

    document.body.insertAdjacentHTML('beforeend', termsModalHTML);

    const termsModal = document.getElementById("termsModal");

    // Global Click Handler
    document.addEventListener('click', function(e) {
        const target = e.target.closest('#termsLink');

        if (target) {
            e.preventDefault();
            e.stopPropagation();
            termsModal.style.display = 'flex'; 
            document.body.style.overflow = "hidden";
        }

        // Close Logic (Button or clicking background)
        if (e.target.id === 'closeTermsBtn' || e.target === termsModal) {
            termsModal.style.display = 'none';
            document.body.style.overflow = "auto";
        }
    });
});