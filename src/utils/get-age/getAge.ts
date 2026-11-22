const getAge = (
  birthdate: string | undefined | null,
  deathday: string | undefined | null,
) => {
  if (!birthdate) return null;

  const now = new Date();
  const birthDate = new Date(birthdate);

  const nowYear = now.getFullYear();
  const nowMonth = now.getMonth() + 1;
  const today = now.getDate();

  const birthYear = birthDate.getFullYear();
  const birthMonth = birthDate.getMonth();
  const birthDay = birthDate.getDate();

  let age = nowYear - birthYear;

  if (nowMonth < birthMonth) {
    age--;
  } else if (nowMonth === birthMonth && today < birthDay) {
    age--;
  }

  if (deathday) {
    const deathDate = new Date(deathday);

    const deathYear = deathDate.getFullYear();
    const deathMonth = deathDate.getMonth();
    const deathDay = deathDate.getDay();

    age = deathYear - birthYear;

    if (deathMonth < birthMonth) {
      age--;
    } else if (deathMonth === birthMonth && deathDay < birthDay) {
      age--;
    }

    return `${age} years old (at death)`;
  }

  return `${age} years old`;
};

export default getAge;
