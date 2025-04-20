
import React from 'react';

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  avatar: string;
}

interface TeamSectionProps {
  team: TeamMemberProps[];
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, bio, avatar }) => {
  return (
    <div className="flex flex-col items-center group">
      <div className="w-48 h-48 rounded-full overflow-hidden mb-4 border-4 border-white shadow-lg relative transition-all duration-300 group-hover:scale-105">
        <img 
          src={avatar} 
          alt={name} 
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-primary font-medium mb-2">{role}</p>
      <div className="relative mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute left-1/2 -translate-x-1/2 -top-2 w-0 h-0 
                      border-l-[10px] border-l-transparent 
                      border-b-[10px] border-b-gray-100
                      border-r-[10px] border-r-transparent">
        </div>
        <p className="bg-gray-100 p-4 rounded-lg text-center text-sm">{bio}</p>
      </div>
    </div>
  );
};

const TeamSection: React.FC<TeamSectionProps> = ({ team }) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Meet Our Team</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              role={member.role}
              bio={member.bio}
              avatar={member.avatar}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
