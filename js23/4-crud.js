// c => create => POST
// r => read => GET
// u => update => PUT / PATCH
// d => delete => DELETE

async function fetchData() {
  // read => GET
  // fetch
  // const res = await fetch(
  //   'https://65b5468e41db5efd2867894d.mockapi.io/users/2'
  // );

  // const data = await res.json();
  // console.log(data);

  ///////////////////////
  // axios
  // const res = await axios.get(
  //   'https://65b5468e41db5efd2867894d.mockapi.io/users/2'
  // );

  // console.log(res.data);

  /////////////////////////////////

  const person = [
    {
      name: 'amin',
      avatar: '',
      description: 'godrat',
    },
  ];
  // const person = [
  //   {
  //     name: 'amin',
  //     avatar: '',
  //     description: 'godrat',
  //   },
  //   {
  //     name: 'omid',
  //     avatar: '',
  //     description: 'godrat',
  //   },
  // ];

  // person.forEach(async (obj) => {
  //   const res = await fetch(
  //     'https://65b5468e41db5efd2867894d.mockapi.io/users',
  //     {
  //       method: 'POST',
  //       body: JSON.stringify(obj),
  //       headers: {
  //         'content-type': 'application/json',
  //       },
  //     }
  //   );

  //   const data = await res.json();
  //   console.log(data);
  // });
  //////////////////////////////////
  // const res = await fetch('https://65b5468e41db5efd2867894d.mockapi.io/users', {
  //   method: 'POST',
  //   body: JSON.stringify(person),
  //   headers: {
  //     'content-type': 'application/json',
  //   },
  // });

  // console.log(res);
  // const data = await res.json();
  // console.log(data);
  //////////////////////////////
  // axios
  // const res = await axios.post(
  //   'https://65b5468e41db5efd2867894d.mockapi.io/users',
  //   person,
  //   {
  //     headers: {
  //       'content-type': 'application/json',
  //     },

  //     // params: {

  //     // }
  //   }
  // );

  // console.log(res.data);

  //////////////////////////////
  //////////////////////////////
  // update
  // fetch
  //     'content-type': 'application/json',
  //   const res = await fetch(
  //     'https://65b5468e41db5efd2867894d.mockapi.io/users/1',
  //     {
  //       method: 'PUT',
  //       body: JSON.stringify({
  //         name: 'sara',
  //         description: 'mother of godrat',
  //       }),
  //       headers: {
  //         'content-type': 'application/json',
  //       },
  //     }
  //   );

  //   const data = await res.json();
  //   console.log(data);

  // //////////////////////////////
  // axios
  // const res = await axios.put(
  //   'https://65b5468e41db5efd2867894d.mockapi.io/users/1',
  //   {
  //     name: 'mobina',
  //     description: 'mazloooooooooom',
  //   },
  //   {
  //     headers: {
  //       'content-type': 'application/json',
  //     },
  //   }
  // );

  // console.log(res.data);

  // //////////////////////////////
  // delete
  // axios
  // const deleleUser = await fetch(
  //   'https://65b5468e41db5efd2867894d.mockapi.io/users/1',
  //   {
  //     method: 'DELETE',
  //   }
  // );

  // const data = await deleleUser.json();
  // console.log(data);
  // for (let i = 0; i < 10; i++) {
  //   const deleleUser = await fetch(
  //     'https://65b5468e41db5efd2867894d.mockapi.io/users/' + i,
  //     {
  //       method: 'DELETE',
  //     }
  //   );

  //   const data = await deleleUser.json();
  //   console.log(data);
  // }
}

fetchData();
