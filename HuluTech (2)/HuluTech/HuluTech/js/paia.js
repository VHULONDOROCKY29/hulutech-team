document.addEventListener('DOMContentLoaded', () => {
    // 1. Inject Responsive CSS for the Modal
    const style = document.createElement('style');
    style.innerHTML = `
        #paiaModal .glass-content {
            background: #0f172a;
            padding: 30px;
            border: 2px solid #FFDB58;
            width: 90%;
            max-width: 750px;
            max-height: 85vh;
            border-radius: 24px;
            color: #fff;
            box-shadow: 0 20px 50px rgba(0,0,0,1);
            font-family: 'Segoe UI', Roboto, sans-serif;
            position: relative;
            display: flex;
            flex-direction: column;
            animation: modalSlideIn 0.4s cubic-bezier(0.23, 1, 0.32, 1);
        }

        @keyframes modalSlideIn {
            from { transform: translateY(30px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }

        /* Mobile Specific Adjustments */
        @media (max-width: 600px) {
            #paiaModal .glass-content {
                padding: 20px;
                width: 95%;
                border-radius: 18px;
            }
            #paiaModal h2 { font-size: 1.4rem !important; }
            #paiaModal .scroll-area { max-height: 60vh !important; }
            #paiaModal h3 { font-size: 1rem !important; }
            #paiaModal p, #paiaModal li { font-size: 0.85rem !important; }
        }
    `;
    document.head.appendChild(style);

    // 2. Inject the Modal HTML
    const paiaModalHTML = `
    <div id="paiaModal" style="display:none; position:fixed; z-index:999999; left:0; top:0; width:100%; height:100%; background:rgba(6, 18, 43, 0.95); backdrop-filter:blur(15px); -webkit-backdrop-filter:blur(15px); align-items:center; justify-content:center;">
      <div class="glass-content">
        
        <h2 style="color: #FFDB58; margin-top:0; text-align:center; text-transform: uppercase; letter-spacing: 2px;">PAIA MANUAL</h2>
        <p style="font-size:0.75rem; color:#888; text-align:center; margin-bottom:15px;">Prepared in terms of Section 51 of the Promotion of Access to Information Act, 2000</p>

        <div class="scroll-area" style="overflow-y: auto; padding-right: 10px; line-height: 1.6; border-top: 1px solid rgba(255, 219, 88, 0.2); padding-top: 15px;">
          
          <h3 style="color:#FFDB58;">1. Introduction</h3>
          <p>This manual promotes transparency and accountability by providing a framework for the public to request access to records held by Hulutech (Pty) Ltd.</p>

          <h3 style="color:#FFDB58; margin-top:15px;">2. Company Details</h3>
          <p><strong>Name:</strong> Hulutech (Pty) Ltd<br>
             <strong>Website:</strong> www.hulutech.co.za<br>
             <strong>Email:</strong> info@hulutech.co.za</p>

          <h3 style="color:#FFDB58; margin-top:15px;">3. Information Officer</h3>
          <p><strong>Name:</strong> Lesego Lubisi<br>
             <strong>Email:</strong> info@hulutech.co.za</p>

          <h3 style="color:#FFDB58; margin-top:15px;">6. Records Held</h3>
          <p>Registration docs, Tax records, HR contracts, and Client service agreements.</p>

          <h3 style="color:#FFDB58; margin-top:15px;">9. Privacy (POPIA)</h3>
          <p>Hulutech processes personal information in accordance with POPIA (2013) lawfully and securely.</p>
        </div>

        <button id="closePaiaBtn" style="margin-top:20px; width:100%; padding:14px; background:#FFDB58; border:none; color:#000; font-weight:900; border-radius:12px; cursor:pointer; text-transform:uppercase; font-size:0.9rem; transition: 0.3s;">Close Manual</button>
      </div>
    </div>`;

    document.body.insertAdjacentHTML('beforeend', paiaModalHTML);

    const paiaModal = document.getElementById("paiaModal");

    // 3. Handlers
    document.addEventListener('click', function(e) {
        const target = e.target.closest('#paiaLink');

        if (target) {
            e.preventDefault();
            paiaModal.style.display = 'flex'; 
            document.body.style.overflow = "hidden"; // Prevent background scroll
        }

        if (e.target.id === 'closePaiaBtn' || e.target === paiaModal) {
            paiaModal.style.display = 'none';
            document.body.style.overflow = "auto";
        }
    });
});