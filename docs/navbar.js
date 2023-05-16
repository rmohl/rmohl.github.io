// code for navbar

document.write(`

<div class="navbar">

    <a href="index.html"><button class="navBtn">Home</button></a>

    <a href="media/resume.pdf"><button class="navBtn">Resume</button></a>

    <div class="dropdown" id="dropdown-coop">
        <button class="navBtn">Co-op Work Term Reports</button>
        <div class="dropdown-content">
            <a href="s21-overview.html">Summer 2021</a>
            <a href="f21-overview.html">Fall 2021</a>
            <a href="s22-overview.html">Summer 2022</a>
        </div>
    </div>

    <div class="dropdown" id="dropdown-links">
        <button class="navBtn">Links</button>
        <div class="dropdown-content">
            <a href="https://github.com/rmohl" target="_blank">GitHub</a>
            <a href="https://www.linkedin.com/in/rachael-mohl" target="_blank">LinkedIn</a>
        </div>
    </div>

</div>

`);
