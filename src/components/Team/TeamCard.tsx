import React from 'react';

interface TeamCardProps {
  name: string;
  role: string;
  image: string;
  fb: string;
  linkedin: string;
  git: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ name, role, image , fb , linkedin ,git }) => {
  return (
    <div className="relative scale-75 w-[20rem] h-[25rem] ipadair:scale-100 bg-[#FAF8E0]  border-[#100D5C] border-4 overflow-hidden group">
        <div className='w-[100%] h-[70%]  bg-[#100D5C] transition-height duration-300 group-hover:h-[58%] group-hover:bg-[url(/assets/Team/Group.svg)] bg-cover'>
        <img src={image} alt={name} className="w-[90%] h-[98%] mx-auto pt-2 transition-transform duration-300 group-hover:scale-x-[0.6] group-hover:scale-y-95" />
        </div>
        <div className='w-[100%] h-[30%]   pt-4 overflow-hidden transition-height duration-300 group-hover:h-[42%]'>
            <div className='w-[80%] h-[2.25rem] bg-[#FAF8E0]  border-[#100D5C] border-2 text-center flex justify-center items-center mx-auto p-3'><p className='font-tusker text-[#100D5C] tracking-wider text-nowrap text-sm'>{name}</p></div>
            <div className='w-[80%] h-[2.25rem] bg-[#100D5C]  border-[#100D5C] border-2 text-center flex justify-center items-center mx-auto mt-2'><p className="font-tusker text-[#FAF8E0] tracking-widest ">{role}</p></div>

            <div id='icons' className='w-[80%] h-[0rem] text-center flex justify-evenly mx-auto mt-4 overflow-hidden  opacity-0 transition-all duration-300 group-hover:h-[2.5rem] group-hover:opacity-100'>
            {fb && (
						<a href={fb} target="_blank" rel="noreferrer">
							<img
							    className='w-8 h-8'
								src="/assets/Team/fb.png"
								alt="facebook"
							/>
						</a>
					)}   

             {linkedin && (
						<a href={linkedin} target="_blank" rel="noreferrer">
							{" "}
							<img
								  className='w-8 h-8'
								src="/assets/Team/linkedin.png"
								alt="linkedin"
							/>
						</a>
					)}
				{git && (
						<a href={git} target="_blank" rel="noreferrer">
							<img
							      className='w-8 h-8'
								src="/assets/Team/github.png"
								alt=" github"
							/>
						</a>
					)}                     
               </div>
        </div>
      
        <div className='absolute left-0 bottom-0 w-[1.25rem] h-[1.25rem]' >
              <img src='/assets/Team/Eclipseleft.png' alt='leftEclipse'/>
        </div>
        <div className='absolute right-0 bottom-0 w-[1.25rem] h-[1.25rem]' >
              <img src='/assets/Team/EclipseRight.png' alt='leftEclipse'/>
        </div>
    </div>
  );
};

export default TeamCard;
