import "./skills.css"

export default function Skills (){

    const skills_data= [

        {
            title:"Languages",
            items:["JavaScript","C++","C#"]
        },
         {
            title:"FRONTEND",
            items:["React","Next.js"]
        },
        {
            title: "BACKEND",
            items: ["Express.js", "Node.js","MVC Pattern"],
        },
        {
            title: "DATABASE",
            items: ["MongoDB"],
        },
        {
            title: "TOOLS",
            items: ["Git", "GitHub", "FFmpeg", "yt-dlp"],
        }, 
    ];

    return (
        <section className="skills" id="skills">

            <div className="title">
                <p>02 -</p>
                <h2> Technical Skills</h2>
            </div>

<div className="outter">

      <div className="grid">

        {skills_data.map((col, index) => (
          <div key={index} className="inner">

            <h4 className="skills-title">{col.title}</h4>

            <ul className="skills-list">

              {col.items.map((item, itemIdx) => (
                <li key={itemIdx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}


      </div>
</div>
            </section>

    )
}