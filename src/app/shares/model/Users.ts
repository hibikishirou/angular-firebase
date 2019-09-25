
export class Profile {
  born: number;
  first: string;
  last: string;
  number: string;
  constructor(profile?) {
    profile = profile || {};
    this.born = profile.born || null;
    this.first = profile.first || '';
    this.last = profile.last || '';
    this.number = profile.number || '';
  }
}

export class Hobby {
  subject: string;
  constructor(hobby?) {
    hobby = hobby || {};
    this.subject = hobby.subject || '';
  }
}

export class User {
  profile: Profile;
  hobby: Hobby[];

  constructor(user?: User) {
    user = user || new User();
    this.profile = user.profile || new Profile();
    this.hobby = user.hobby || [];
  }
}

