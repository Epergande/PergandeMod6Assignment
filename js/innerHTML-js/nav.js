const rootDirectory = "/PergandeMod6Assignment"
document.querySelector('section').innerHTML = `

    <nav>

        <div>

            <ul>
                <li>
                    <a href="${rootDirectory}/index.html" >
                        <img src="../img/ai-gym-logo.png" alt="Satellite Fitness">
                    </a>
                </li>
                <li >
                    <a href="${rootDirectory}/members.html" class="nav-list" >Current Members</a>
                </li>
                <li>
                <a href="${rootDirectory}/edit-list.html" class="nav-list">Modify Members</a>
                </li>
                   <li>
                <a href="${rootDirectory}/join-form.html" class="nav-list">Join The Orbit</a>
                </li>
            </ul>
        </div>
    </nav>
    `;