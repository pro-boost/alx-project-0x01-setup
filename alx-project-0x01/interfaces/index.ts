export interface ButtonProps {
  text: string;
  className?: string;
  onClick: () => void;
}
export interface PostProps {
    userId: number;
    id: number;
    title: string;
    body: string;


  }
  export interface PostsPageProps {
    posts: PostProps[];
  }
  export interface UserProps { 
    id:       number;
    name:     string;
    username: string;
    email:    string;
    address:  Address;
    phone:    string;
    website:  string;
    company:  Company;
}

export interface Address {
    street: string;
    suite:   string;
    city:    string;
    zipcode: string;
    geo:     Geo;
}

export interface Geo {
    lat: string;
    lng: string;
}

export interface Company {
    name:        string;
    catchPhrase: string;
    bs:          string;
}
export interface UsersPageProps {
    users: UserProps[];
  }
  export interface PostData {
    userId: number;
    id?: number;
    title: string;
    body: string;
  }
  
  export interface PostModalProps {
    onClose: () => void;
    onSubmit: (post: PostData) => void;
  }
  export interface PostsPageProps {
    posts: PostProps[];
  }
  export interface UserData {
    id:       number;
    name:     string;
    username: string;
    email:    string;
    address:  Address;
    phone:    string;
    website:  string;
    company:  Company;
}

export interface Address {
    street:  string;
    suite:   string;
    city:    string;
    zipcode: string;
    geo:     Geo;
}

export interface Geo {
    lat: string;
    lng: string;
}

export interface Company {
    name:        string;
    catchPhrase: string;
    bs:          string;
}



export interface UserModalProps {
  onClose: () => void;
  onSubmit: (user: UserData) => void;
}