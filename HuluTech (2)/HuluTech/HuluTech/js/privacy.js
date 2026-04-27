document.addEventListener('DOMContentLoaded', () => {
    // 1. Inject Responsive & Custom Scrollbar CSS
    const style = document.createElement('style');
    style.innerHTML = `
        #privacyModal {
            display: none;
            position: fixed;
            z-index: 10000;
            left: 0; top: 0;
            width: 100%; height: 100%;
            background: rgba(0, 0, 0, 0.9);
            backdrop-filter: blur(10px);
            align-items: center;
            justify-content: center;
        }

        #privacyModal .modal-content {
            background: #0f172a;
            border: 2px solid #E1AD01;
            border-radius: 20px;
            padding: 25px;
            color: #fff;
            box-shadow: 0 20px 50px rgba(0,0,0,1);
            margin: auto;
            max-height: 90vh;
            display: flex;
            flex-direction: column;
        }

        /* Custom Smooth Scrollbar to match your brand */
        .policy-container::-webkit-scrollbar {
            width: 6px;
        }
        .policy-container::-webkit-scrollbar-track {
            background: rgba(255, 255, 255, 0.05);
        }
        .policy-container::-webkit-scrollbar-thumb {
            background: #E1AD01;
            border-radius: 10px;
        }

        @media (max-width: 480px) {
            .btn-group { flex-direction: column; gap: 10px !important; }
            #privacyModal .modal-content { width: 92%; padding: 20px; }
            #privacyModal h2 { font-size: 1.3rem; }
        }
    `;
    document.head.appendChild(style);

    // 2. Inject the COMPLETE 12-Section HTML Modal
    const modalHTML = `
    <div id="privacyModal">
      <div class="modal-content" style="max-width: 700px; width: 95%;">
        <div id="policy-view">
          <h2 style="color: #E1AD01; margin-bottom: 5px; text-align: center;">PRIVACY POLICY</h2>
          <p style="color: #ccc; font-size: 0.75rem; margin-bottom: 15px; text-align: center;">Hulutech (Pty) Ltd | Last Updated: 2 April 2026</p>
          
          <div class="policy-container" style="text-align: left; background: rgba(255,255,255,0.03); padding: 20px; border-radius: 8px; font-size: 0.85rem; line-height: 1.6; max-height: 45vh; overflow-y: auto; margin-bottom: 20px; border: 1px solid rgba(225, 173, 1, 0.2); color: #fff; scroll-behavior: smooth;">
            
            <h3 style="color: #E1AD01; font-size: 1rem; margin-top: 0;">1. Introduction</h3>
            <p>Hulutech (Pty) Ltd is committed to protecting your personal information and respecting your privacy in accordance with <strong>POPIA</strong>.</p>

            <h3 style="color: #E1AD01; font-size: 1rem; margin-top: 15px;">2. Information We Collect</h3>
            <p>We collect Personal Identification (Name, Email, Phone, Company), Technical Data (IP address, usage logs), and Business Information required for service delivery.</p>

            <h3 style="color: #E1AD01; font-size: 1rem; margin-top: 15px;">3. How We Collect Information</h3>
            <p>Data is collected via website forms, newsletter sign-ups, business contracts, and cookies/analytics tools.</p>

            <h3 style="color: #E1AD01; font-size: 1rem; margin-top: 15px;">4. How We Use Your Information</h3>
            <p>To respond to enquiries, manage IT services, communicate updates, and comply with legal or regulatory obligations.</p>

            <h3 style="color: #E1AD01; font-size: 1rem; margin-top: 15px;">5. Sharing Your Information</h3>
            <p><strong>We do not sell personal information.</strong> We only share data with trusted partners necessary for site functionality or legal authorities.</p>

            <h3 style="color: #E1AD01; font-size: 1rem; margin-top: 15px;">6. Data Security</h3>
            <p>We implement technical and organisational measures, including secure cloud platforms and access controls, to prevent unauthorised access.</p>

            <h3 style="color: #E1AD01; font-size: 1rem; margin-top: 15px;">7. Data Retention</h3>
            <p>Information is kept only as long as necessary for business or legal requirements, then securely deleted or anonymised.</p>

            <h3 style="color: #E1AD01; font-size: 1rem; margin-top: 15px;">8. Your Privacy Rights</h3>
            <p>Under POPIA, you have the right to access, correct, or request deletion of your information at any time.</p>

            <h3 style="color: #E1AD01; font-size: 1rem; margin-top: 15px;">9. Cookies and Tracking</h3>
            <p>We use cookies to enhance user experience. You can manage these via your browser settings.</p>

            <h3 style="color: #E1AD01; font-size: 1rem; margin-top: 15px;">10. Third-Party Links</h3>
            <p>We are not responsible for the privacy practices of external sites linked on our platform.</p>

            <h3 style="color: #E1AD01; font-size: 1rem; margin-top: 15px;">11. Policy Updates</h3>
            <p>This policy may be updated periodically. Changes will be posted here with a revised date.</p>

            <h3 style="color: #E1AD01; font-size: 1rem; margin-top: 15px;">12. Contact Information</h3>
            <p><strong>Hulutech (Pty) Ltd</strong><br>Email: info@hulutech.co.za<br>Website: www.hulutech.co.za</p>
          </div>

          <div class="btn-group" style="display: flex; justify-content: center; gap: 10px;">
            <button id="acceptBtn" style="flex: 1; padding: 14px; border-radius: 10px; border: none; background: #E1AD01; color: #000; font-weight: 900; cursor: pointer; text-transform: uppercase;">Accept & Continue</button>
            <button id="rejectBtn" style="flex: 1; padding: 14px; border-radius: 10px; border: 1px solid #E1AD01; background: transparent; color: #E1AD01; font-weight: 800; cursor: pointer; text-transform: uppercase;">Decline</button>
          </div>
        </div>

        <div id="success-view" style="display: none; text-align: center;">
          <h2 style="color: #E1AD01;">✔ PREFERENCES SAVED</h2>
          <p>Thank you for trusting HULUTECH. You may now proceed.</p>
          <button id="closeSuccess" style="width: 100%; padding: 14px; border-radius: 10px; border: none; background: #E1AD01; color: #000; font-weight: 900; margin-top: 20px; cursor: pointer; text-transform: uppercase;">Enter Site</button>
        </div>
      </div>
    </div>`;
    
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    const modal = document.getElementById("privacyModal");
    const privacyLink = document.getElementById("privacyLink");

    // Show if not accepted
    if (localStorage.getItem("privacyStatus") !== "accepted") {
        modal.style.display = "flex";
        document.body.style.overflow = "hidden";
    }

    if (privacyLink) {
        privacyLink.onclick = (e) => {
            e.preventDefault();
            modal.style.display = "flex";
            document.getElementById("policy-view").style.display = "block";
            document.getElementById("success-view").style.display = "none";
            document.body.style.overflow = "hidden";
        };
    }

    document.getElementById("acceptBtn").onclick = () => {
        localStorage.setItem("privacyStatus", "accepted");
        document.getElementById("policy-view").style.display = "none";
        document.getElementById("success-view").style.display = "block";
    };

    document.getElementById("rejectBtn").onclick = () => {
        alert("Action Required: You must accept the Privacy Policy to browse this site.");
    };

    document.getElementById("closeSuccess").onclick = () => {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    };
});