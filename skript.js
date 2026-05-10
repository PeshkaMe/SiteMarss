const facts = [
    "Марс має два супутники: Фобос і Деймос.",
    "На Марсі знаходиться Олімп — найвища гора в Сонячній системі (21 км).",
    "Рік на Марсі триває майже вдвічі довше, ніж на Землі — 687 днів.",
    "Через низьку щільність атмосфери небо на Марсі вдень рожево-буре.",
    "Гравітація на Марсі на 62% нижча, ніж на Землі.",
    "На Марсі бувають найбільші пилові бурі, що тривають місяцями."
];

const exploreBtn = document.getElementById('exploreBtn');
const homeScreen = document.getElementById('home-screen');
const infoScreen = document.getElementById('info-screen');
const factText = document.getElementById('factText');


exploreBtn.addEventListener('click', () => {
    homeScreen.style.opacity = '0';
    homeScreen.style.transform = 'scale(0.9)';
    
    setTimeout(() => {
        homeScreen.classList.add('hidden');
        infoScreen.classList.remove('hidden');
    }, 800);
});


function getFact() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    factText.style.opacity = 0;
    setTimeout(() => {
        factText.textContent = facts[randomIndex];
        factText.style.opacity = 1;
        factText.style.transition = '0.5s';
    }, 300);
}