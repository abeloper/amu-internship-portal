 // Function to open login modal
        function openLoginModal(userType) {
            const modal = document.getElementById('loginModal');
            const modalTitle = document.getElementById('modalTitle');
            const modalContent = document.getElementById('modalContent');
            
            let title = '';
            let content = '';
            
            if (userType === 'student') {
                title = 'Student Portal - Login / Sign Up';
                content = `
                    <div style="margin-bottom: 25px;">
                        <h3 style="margin-bottom: 15px; color: var(--amu-dark);">Login to Your Account</h3>
                        <div style="display: flex; flex-direction: column; gap: 15px;">
                            <input type="text" placeholder="Student ID or Email" style="padding: 12px; border: 1px solid #ddd; border-radius: 6px; font-size: 1rem;">
                            <input type="password" placeholder="Password" style="padding: 12px; border: 1px solid #ddd; border-radius: 6px; font-size: 1rem;">
                            <button style="background-color: var(--amu-blue); color: white; padding: 12px; border: none; border-radius: 6px; font-weight: 600; cursor: pointer; transition: all 0.3s;" onmouseover="this.style.backgroundColor='var(--amu-light-blue)'" onmouseout="this.style.backgroundColor='var(--amu-blue)'">Login</button>
                        </div>
                    </div>
                    <div>
                        <h3 style="margin-bottom: 15px; color: var(--amu-dark);">New Student? Sign Up</h3>
                        <p style="margin-bottom: 20px; color: var(--amu-gray);">Create your student account to access internship opportunities.</p>
                        <button style="background-color: var(--amu-orange); color: white; padding: 12px; border: none; border-radius: 6px; font-weight: 600; cursor: pointer; width: 100%; transition: all 0.3s;" onmouseover="this.style.backgroundColor='#e68a00'" onmouseout="this.style.backgroundColor='var(--amu-orange)'">Create Student Account</button>
                    </div>
                `;
            } else if (userType === 'industry') {
                title = 'Industry Partner Portal - Login / Sign Up';
                content = `
                    <div style="margin-bottom: 25px;">
                        <h3 style="margin-bottom: 15px; color: var(--amu-dark);">Company Login</h3>
                        <div style="display: flex; flex-direction: column; gap: 15px;">
                            <input type="text" placeholder="Company Email" style="padding: 12px; border: 1px solid #ddd; border-radius: 6px; font-size: 1rem;">
                            <input type="password" placeholder="Password" style="padding: 12px; border: 1px solid #ddd; border-radius: 6px; font-size: 1rem;">
                            <button style="background-color: var(--amu-blue); color: white; padding: 12px; border: none; border-radius: 6px; font-weight: 600; cursor: pointer; transition: all 0.3s;" onmouseover="this.style.backgroundColor='var(--amu-light-blue)'" onmouseout="this.style.backgroundColor='var(--amu-blue)'">Login</button>
                        </div>
                    </div>
                    <div>
                        <h3 style="margin-bottom: 15px; color: var(--amu-dark);">New Industry Partner?</h3>
                        <p style="margin-bottom: 20px; color: var(--amu-gray);">Register your company to post internships and hire AMU students.</p>
                        <button style="background-color: var(--amu-orange); color: white; padding: 12px; border: none; border-radius: 6px; font-weight: 600; cursor: pointer; width: 100%; transition: all 0.3s;" onmouseover="this.style.backgroundColor='#e68a00'" onmouseout="this.style.backgroundColor='var(--amu-orange)'">Register Company</button>
                    </div>
                `;
            } else if (userType === 'department') {
                title = 'Department Staff Portal - Login';
                content = `
                    <div style="margin-bottom: 25px;">
                        <h3 style="margin-bottom: 15px; color: var(--amu-dark);">Department Coordinator Login</h3>
                        <div style="display: flex; flex-direction: column; gap: 15px;">
                            <input type="text" placeholder="Staff ID" style="padding: 12px; border: 1px solid #ddd; border-radius: 6px; font-size: 1rem;">
                            <input type="password" placeholder="Password" style="padding: 12px; border: 1px solid #ddd; border-radius: 6px; font-size: 1rem;">
                            <button style="background-color: var(--amu-blue); color: white; padding: 12px; border: none; border-radius: 6px; font-weight: 600; cursor: pointer; transition: all 0.3s;" onmouseover="this.style.backgroundColor='var(--amu-light-blue)'" onmouseout="this.style.backgroundColor='var(--amu-blue)'">Login</button>
                        </div>
                    </div>
                    <div>
                        <h3 style="margin-bottom: 15px; color: var(--amu-dark);">Department Functions</h3>
                        <ul style="list-style: none; color: var(--amu-gray);">
                            <li style="margin-bottom: 10px; padding-left: 20px; position: relative;"><i class="fas fa-check" style="position: absolute; left: 0; color: var(--amu-light-blue);"></i> Review and approve internships</li>
                            <li style="margin-bottom: 10px; padding-left: 20px; position: relative;"><i class="fas fa-check" style="position: absolute; left: 0; color: var(--amu-light-blue);"></i> Track student placements</li>
                            <li style="margin-bottom: 10px; padding-left: 20px; position: relative;"><i class="fas fa-check" style="position: absolute; left: 0; color: var(--amu-light-blue);"></i> Generate department reports</li>
                            <li style="margin-bottom: 10px; padding-left: 20px; position: relative;"><i class="fas fa-check" style="position: absolute; left: 0; color: var(--amu-light-blue);"></i> Monitor industry engagement</li>
                        </ul>
                    </div>
                `;
            }
            
            modalTitle.textContent = title;
            modalContent.innerHTML = content;
            modal.style.display = 'flex';
        }
        
        // Function to close login modal
        function closeLoginModal() {
            document.getElementById('loginModal').style.display = 'none';
        }
        
        // Apply button functionality
        document.querySelectorAll('.apply-btn').forEach(button => {
            button.addEventListener('click', function() {
                const companyName = this.closest('.internship-card').querySelector('h3').textContent;
                alert(`Application form for ${companyName} would open here.\n\nIn the actual system, students would need to be logged in to apply.`);
            });
        });
        
        // Login/Signup button functionality
        document.querySelectorAll('.btn-login, .btn-signup').forEach(button => {
            button.addEventListener('click', function() {
                alert('Login/Signup modal would open with role selection (Student, Industry Partner, Department Staff, Admin).');
            });
        });
        
        // Smooth scrolling for navigation links
        document.querySelectorAll('nav a').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if(targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if(targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Close modal when clicking outside
        document.getElementById('loginModal').addEventListener('click', function(e) {
            if(e.target === this) {
                closeLoginModal();
            }
        });