document.addEventListener("DOMContentLoaded", () => {
    const background = document.querySelector(".background");
    const starContainer = document.createElement("div");
    starContainer.classList.add("stars-container");
    background.appendChild(starContainer);
    
    const starCount = 100;
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement("div");
        star.classList.add("star");
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        star.style.left = `${x}vw`;
        star.style.top = `${y}vh`;
        const size = Math.random() * 3 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        const brightness = Math.random() * 0.4 + 0.1;
        star.style.opacity = brightness;
        starContainer.appendChild(star);
    }
    const projects = [
        {
            image: "Assets/img/project1.png",
            title: "MinecraftGiveParticleEditor",
            description: "Particleを付与する<br>コマンドを自動作成ツール",
            downloadUrl: "https://www.mediafire.com/file/42ilykzrpn0m6ea/Minecraft_Give_Particle_Editor.zip/file"
        },
        {
            image: "Assets/img/project2.png",
            title: "DiscordRPCEditor v4.5",
            description: "Discordのステータスを<br>カスタマイズできるツール",
            downloadUrl: "https://www.mediafire.com/file/zcvdwmk4awr9bha/DiscordRPCEditor_v4.5.zip/file"
        },
        {
            image: "Assets/img/project3.png",
            title: "MinecraftPackEditor v1.0",
            description: "マイクラ統合版スキンパック作成ツール(旧)",
            downloadUrl: "https://www.mediafire.com/file/fjm6u5ios8pate3/MinecraftPackEditor+v1.0.zip/file"
        }
    ];

    const projectList = document.getElementById("project-list");
    const modal = document.getElementById("image-modal");
    const modalImg = document.getElementById("modal-img");
    const closeModal = document.querySelector(".close");

    projects.forEach(project => {
        const projectCard = document.createElement("div");
        projectCard.className = "project-card";
        const projectImage = document.createElement("img");
        projectImage.src = project.image;
        projectImage.alt = project.title;
        projectImage.className = "project-image";

        //画像拡大
        projectImage.addEventListener("click", function () {
            modal.style.display = "flex";
            modalImg.src = this.src;
        });
        projectCard.innerHTML = `
            <div class="project-info">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <a href="${project.downloadUrl}" class="download-button" download>
                    <i class="fas fa-download"></i> ダウンロード
                </a>
            </div>
        `;
        projectCard.prepend(projectImage);
        projectList.appendChild(projectCard);
    });

    //拡大した画像を閉じる
    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
    });
    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
