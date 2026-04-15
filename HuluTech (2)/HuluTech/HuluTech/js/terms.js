document.addEventListener('DOMContentLoaded', () => {
    // 1. Inject the Full Terms and Conditions Modal
    const termsModalHTML = `
    <div id="termsModal" style="display:none; position:fixed; z-index:999999; left:0; top:0; width:100%; height:100%; background:rgba(0,0,0,0.9); backdrop-filter:blur(10px); align-items:center; justify-content:center; flex-direction:column;">
      <div style="background:#0f172a; padding:30px; border:2px solid #E1AD01; width:95%; max-width:750px; border-radius:20px; color:#fff; box-shadow: 0 20px 50px rgba(0,0,0,1); font-family: sans-serif; position:relative;">
        
        <h2 style="color: #E1AD01; margin-top:0; text-align:center; text-transform: uppercase;">Website Terms and Conditions</h2>
        <p style="font-size:0.8rem; color:#888; text-align:center; margin-bottom:15px;">Hulutech (Pty) Ltd | Last Updated: 2 April 2026</p>

        <div style="max-height: 400px; overflow-y: auto; padding-right: 15px; line-height: 1.6; font-size: 0.9rem; border-top: 1px solid rgba(225, 173, 1, 0.2); padding-top: 15px; text-align: left;">
          
          <h3 style="color:#E1AD01; font-size:1.1rem;">1. Introduction</h3>
          <p>Welcome to the Hulutech website. These Terms and Conditions govern your use of our website and related services provided by Hulutech (Pty) Ltd. By accessing this website, you agree to comply with these terms.</p>

          <h3 style="color:#E1AD01; font-size:1.1rem; margin-top:15px;">2. Company Information</h3>
          <p>This website is operated by Hulutech (Pty) Ltd, South Africa. For enquiries, contact: <strong>info@hulutech.co.za</strong>.</p>

          <h3 style="color:#E1AD01; font-size:1.1rem; margin-top:15px;">3. Use of the Website</h3>
          <p>Users agree to use the website for lawful purposes only and not engage in activities that damage, disrupt, or gain unauthorised access to our systems or data.</p>

          <h3 style="color:#E1AD01; font-size:1.1rem; margin-top:15px;">4. Intellectual Property</h3>
          <p>All content, including text, graphics, logos, branding, and software, is the property of Hulutech and is protected under applicable intellectual property laws.</p>

          <h3 style="color:#E1AD01; font-size:1.1rem; margin-top:15px;">5. Website Content Disclaimer</h3>
          <p>Information is for general purposes only. Hulutech makes no guarantees regarding the completeness or accuracy of the information provided.</p>

          <h3 style="color:#E1AD01; font-size:1.1rem; margin-top:15px;">6. Limitation of Liability</h3>
          <p>Hulutech will not be liable for any direct or indirect damages, loss of profits, or business interruption arising from the use of this website.</p>

          <h3 style="color:#E1AD01; font-size:1.1rem; margin-top:15px;">7. Third-Party Links</h3>
          <p>Hulutech is not responsible for the content, policies, or practices of external websites linked for convenience.</p>

          <h3 style="color:#E1AD01; font-size:1.1rem; margin-top:15px;">8. Privacy</h3>
          <p>Your use of this website is also governed by our Privacy Policy in accordance with the Protection of Personal Information Act (POPIA).</p>

          <h3 style="color:#E1AD01; font-size:1.1rem; margin-top:15px;">9. Website Availability</h3>
          <p>We do not guarantee uninterrupted access and may suspend the website for maintenance or upgrades at any time.</p>

          <h3 style="color:#E1AD01; font-size:1.1rem; margin-top:15px;">10. Prohibited Activities</h3>
          <p>Users may not attempt to hack, use automated bots, or transmit malicious code. Violations may result in legal action.</p>

          <h3 style="color:#E1AD01; font-size:1.1rem; margin-top:15px;">11. Indemnification</h3>
          <p>You agree to hold Hulutech harmless from any claims or losses arising from your misuse of the website or violation of these terms.</p>

          <h3 style="color:#E1AD01; font-size:1.1rem; margin-top:15px;">12. Governing Law</h3>
          <p>These terms are governed by the laws of the Republic of South Africa, including the ECTA and Consumer Protection Act.</p>

          <h3 style="color:#E1AD01; font-size:1.1rem; margin-top:15px;">13. Changes to These Terms</h3>
          <p>Hulutech may update these terms periodically. Continued use of the website constitutes acceptance of the revised terms.</p>

          <h3 style="color:#E1AD01; font-size:1.1rem; margin-top:15px;">14. Contact Information</h3>
          <p>Hulutech (Pty) Ltd<br>Email: info@hulutech.co.za<br>Website: www.hulutech.co.za</p>
        </div>

        <button id="closeTermsBtn" style="margin-top:25px; width:100%; padding:14px; background:#E1AD01; border:none; color:#000; font-weight:900; border-radius:10px; cursor:pointer; text-transform:uppercase; font-size:1rem;">Close & Return</button>
      </div>
    </div>`;

    document.body.insertAdjacentHTML('beforeend', termsModalHTML);

    const termsModal = document.getElementById("termsModal");

    // 2. Global Click Handler
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