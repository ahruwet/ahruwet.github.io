export function skillFunctionality(){

  const skills = [
    //--------add skill here--------//
    {
      icon:'images/icons/html.png',
      name: 'HTML',
      type: 'tech-stack'
    },
    {
      icon:'images/icons/CSS.png',
      name: 'CSS',
      type: 'tech-stack'
    },
    {
      icon:'images/icons/js (1).png',
      name: 'JAVASCRIPT',
      type: 'tech-stack'
    },
    {
      icon:'images/icons/React (2).png',
      name: 'REACT',
      type: 'tech-stack'
    },
    {
      icon:'images/icons/php.png',
      name: 'PHP',
      type: 'tech-stack'
    },
    {
      icon:'images/icons/lua.png',
      name: 'LUA',
      type: 'tech-stack'
    },
    {
      icon:'images/icons/vue.png',
      name: 'VUE',
      type: 'tech-stack'
    },
    {
      icon:'images/icons/python.png',
      name: 'PYTHON',
      type: 'tech-stack'
    },
    {
      icon:'images/icons/visual-studio.png',
      name: 'VS CODE',
      type: 'tool'
    },
    {
      icon:'images/icons/esx.png',
      name: 'ESX',
      type: 'tool'
    },
    {
      icon:'images/icons/qb.png',
      name: 'QB',
      type: 'tool'
    },
    {
      icon:'images/icons/redm.jpeg',
      name: 'RedM',
      type: 'tool'
    },
    {
      icon:'images/icons/github (2).png',
      name: 'GITHUB',
      type: 'tool'
    },
    {
      icon:'images/icons/xammp.png',
      name: 'XAMPP',
      type: 'tool'
    }
  ];


  let techstacksHTML = '';
  let toolsHTML = '';

  skills.forEach(skill => {
    const skillType = skill.type;

    if (skillType === 'tech-stack'){
      techstacksHTML += `
        <div class="tech-stack skill">
          <img class="icon" src="${skill.icon}" alt="skill-icon">
          <p>${skill.name}</p>
        </div>
      `
    }
    if(skillType === 'tool'){
      toolsHTML += `
      <div class="tool skill">
        <img class="icon" src="${skill.icon}" alt="skill-icon">
        <p>${skill.name}</p>
      </div>
    `
    }
  });

  document.querySelector('.skills-container.tech-stack-skills').innerHTML = techstacksHTML;
  document.querySelector('.skills-container.tools-skills').innerHTML = toolsHTML;



  // button functionality
  const techstackBtn = document.querySelector('.tech-stacks-btn');
  const toolsBtn = document.querySelector('.tools-btn');
  const techstackSkill = document.querySelector('.tech-stack-skills');
  const toolsSkill = document.querySelector('.tools-skills');

  techstackBtn.addEventListener('click', ()=>{
    toolsBtn.classList.remove('selected');
    techstackBtn.classList.add('selected');
    techstackSkill.style.display =  'grid';
    toolsSkill.style.display =  'none';

  });


  toolsBtn.addEventListener('click', ()=>{
    toolsBtn.classList.add('selected');
    techstackBtn.classList.remove('selected');
    techstackSkill.style.display =  'none';
    toolsSkill.style.display =  'grid';
    
  });
} 