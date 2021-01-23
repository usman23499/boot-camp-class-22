const { ApolloServer, gql } = require('apollo-server');

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
// set server data
// in qurie we return student array


// second
const students = [
    
    {
      "id":1,
      "name": "Ali",
      "email": "ali@gmail.com",
      "age":21
    },
    {
        "id":2,
        "name": "umer",
        "email": "umer@gmail.com",
        "age":21
    },
    {
        "id":3,
        "name": "Ahmed",
        "email": "Ahmed@gmail.com",
        "age":21
    } 

  
];
// third
const resolvers = {
    Query: {
      //write business logics here
      students: () => students,
    },
    // make reslover of mutataion
    Mutation:{
      addStudent: (_,{input})=>{
        console.log(input)
        //
        students.push( // add new data phele neche wala check phir ye laga na return wala
          {
            name:input.name,
            age:input.age,
            email:input.email,
            id:input.id
          }
        )

        return { // here set the updated data
          // This is for return ke lea
          name:input.name,
          age:input.age,
          email:input.email,
          id:input.id
        } 
      }
    }
  };


// 1st

const typeDefs = gql`


  type Students {
    name: String
    email: String
    age: Int
    id:Int  
  }

  type Query {
    students: [Students]
  }

  input StdInput{
    id:Int
    name: String
    email: String
    age: Int
      
  }

  type Mutation{
    addStudent(input : StdInput ) : Students
  }


`;

// last wala student ye bata raha hai ke function run ke bad wohe student aa jae ae


// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
