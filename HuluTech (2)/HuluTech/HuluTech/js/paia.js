document.addEventListener('DOMContentLoaded', () => {
    // 1. Inject the Full PAIA Manual Modal
    const paiaModalHTML = `
    <div id="paiaModal" style="display:none; position:fixed; z-index:999999; left:0; top:0; width:100%; height:100%; background:rgba(0,0,0,0.9); backdrop-filter:blur(10px); align-items:center; justify-content:center; flex-direction:column;">
      <div style="background:#0f172a; padding:30px; border:2px solid #E1AD01; width:95%; max-width:750px; border-radius:20px; color:#fff; box-shadow: 0 20px 50px rgba(0,0,0,1); font-family: sans-serif; position:relative;">
        
        <h2 style="color: #E1AD01; margin-top:0; text-align:center; text-transform: uppercase;">PAIA MANUAL</h2>
        <p style="font-size:0.8rem; color:#888; text-align:center; margin-bottom:15px;">Prepared in terms of Section 51 of the Promotion of Access to Information Act, 2000</p>

        <div style="max-height: 400px; overflow-y: auto; padding-right: 15px; line-height: 1.6; font-size: 0.9rem; border-top: 1px solid rgba(225, 173, 1, 0.2); padding-top: 15px; text-align: left;">
          
          <h3 style="color:#E1AD01; font-size:1.1rem;">1. Introduction</h3>
          <p>This manual is prepared in accordance with Section 51 of PAIA to promote transparency and accountability by providing a framework for the public to request access to records held by Hulutech (Pty) Ltd.</p>

          <h3 style="color:#E1AD01; font-size:1.1rem; margin-top:15px;">2. Company Details</h3>
          <p><strong>Company Name:</strong> Hulutech (Pty) Ltd<br>
             <strong>Website:</strong> www.hulutech.co.za<br>
             <strong>General Email:</strong> info@hulutech.co.za<br>
             <strong>Registration:</strong> Republic of South Africa</p>

          <h3 style="color:#E1AD01; font-size:1.1rem; margin-top:15px;">3. Information Officer</h3>
          <p><strong>Name:</strong> Lesego Lubisi<br>
             <strong>Position:</strong> Information Officer<br>
             <strong>Email:</strong> info@hulutech.co.za</p>

          <h3 style="color:#E1AD01; font-size:1.1rem; margin-top:15px;">4. Guide on How to Use PAIA</h3>
          <p>A guide on how to use PAIA to access records is available from the Information Regulator of South Africa, explaining the submission process for access requests.</p>

          <h3 style="color:#E1AD01; font-size:1.1rem; margin-top:15px;">5. Records Available Without Request</h3>
          <ul style="padding-left:20px;">
            <li>Company website information</li>
            <li>Marketing materials and brochures</li>
            <li>Public product and service descriptions</li>
            <li>Published company announcements</li>
          </ul>

          <h3 style="color:#E1AD01; font-size:1.1rem; margin-top:15px;">6. Records Held by Hulutech</h3>
          <p><strong>Corporate:</strong> Registration docs, MOI, Director/Shareholder records.<br>
             <strong>Financial:</strong> Statements, Tax records, Invoices and billing.<br>
             <strong>Employees:</strong> Contracts, HR policies, Payroll records.<br>
             <strong>Client/Service:</strong> Service agreements, Project docs, Communications.</p>

          <h3 style="color:#E1AD01; font-size:1.1rem; margin-top:15px;">7. Request Procedure</h3>
          <p>Requests must be submitted in writing to the Information Officer. The request must clearly describe the record and provide sufficient detail for identification.</p>

          <h3 style="color:#E1AD01; font-size:1.1rem; margin-top:15px;">8. Fees</h3>
          <p>A request fee may be payable. Additional fees may be charged for reproduction or preparation of records in accordance with PAIA regulations.</p>

          <h3 style="color:#E1AD01; font-size:1.1rem; margin-top:15px;">9. Protection of Personal Information</h3>
          <p>Hulutech processes personal information in accordance with POPIA (2013). Information is processed lawfully, securely, and only for legitimate business purposes.</p>

          <h3 style="color:#E1AD01; font-size:1.1rem; margin-top:15px;">10. Availability of the Manual</h3>
          <p>This PAIA Manual is available on the Hulutech website and may be requested directly from the Information Officer.</p>
        </div>

        <button id="closePaiaBtn" style="margin-top:25px; width:100%; padding:14px; background:#E1AD01; border:none; color:#000; font-weight:900; border-radius:10px; cursor:pointer; text-transform:uppercase; font-size:1rem;">Close Manual</button>
      </div>
    </div>`;

    document.body.insertAdjacentHTML('beforeend', paiaModalHTML);

    const paiaModal = document.getElementById("paiaModal");

    // 2. Click Handler for PAIA Link
    document.addEventListener('click', function(e) {
        const target = e.target.closest('#paiaLink');

        if (target) {
            e.preventDefault();
            e.stopPropagation();
            paiaModal.style.display = 'flex'; 
            document.body.style.overflow = "hidden";
        }

        // Close logic (Button or clicking background)
        if (e.target.id === 'closePaiaBtn' || e.target === paiaModal) {
            paiaModal.style.display = 'none';
            document.body.style.overflow = "auto";
        }
    });
});