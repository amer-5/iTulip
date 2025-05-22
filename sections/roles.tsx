"use client";

import React from "react";
import Image from "next/image";

import Style from "@/styles/pages/roles.module.css";
import SectionImage from "@/public/images/image2.svg";

type RoleProps = {
  experience: string;
  role: string;
  description: string;
};

const Role: React.FC<RoleProps & { area: string }> = ({
  experience,
  role,
  description,
  area,
}) => {
  return (
    <div className={Style.role} style={{ gridArea: area }}>
      <h3>{experience} - experience</h3>
      <h4>Role: {role}</h4>
      <p>{description}</p>
    </div>
  );
};

const Roles = () => {
  const baseRoles: RoleProps[] = [
    {
      experience: "Senior 16y",
      role: "Back-end",
      description:
        "PHP, Spring, Hibernate, Liquibase, PostgreSQL, Oracle, Jenkins, Jquery, MLM, MNP, MSS, eService",
    },
    {
      experience: "Senior 10y",
      role: "DBMS",
      description:
        "React.js, Python, Android, React Native, AngularJS, MeteorJS, TypeScript, Java, Spring Boot, Ruby on Rails, AWS, SQL",
    },
    {
      experience: "Senior 9y",
      role: "Full Stack",
      description:
        "Angular, Java, C#, Qlikview, MS SQL, Oracle, ArcGIS, Enterprise Qlik Sense +Qlikview, AWS, Azure",
    },
    {
      experience: "Medior 5y",
      role: "Front-end",
      description:
        "Angular, Spring, Hibernate, HTML5, CSS 3, Java, JavaScript, PHP, Android, NodeJS, C#, .NET Bootstrap, C+",
    },
    {
      experience: "Medior 4y",
      role: "Full Stack",
      description:
        "React, Python, Clojure, C++, C#, JavaScript, Android, Spring, Django, Jenkins, PostgreSQL, Swift, PHP, Laravel, Drupal, Angular, NodeJS",
    },
  ];

  return (
    <div className={Style.parent}>
      <h1 className={Style.heading}>Een greep uit onze profielen!</h1>
      <div className={Style.rolesWrapper}>
        {baseRoles.map((role, index) => (
          <Role
            key={index}
            experience={role.experience}
            role={role.role}
            description={role.description}
            area={`role${index}`}
          />
        ))}
      </div>
      <Image src={SectionImage} alt="Roles Image" className={Style.image} />
    </div>
  );
};

export default Roles;
