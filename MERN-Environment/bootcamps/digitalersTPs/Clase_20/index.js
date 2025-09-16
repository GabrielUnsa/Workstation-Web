/*
const start = async () => {
    console.time();
    await new Promise((resolve) => {
        setTimeout( () => {
            resolve();
        }, 1000);
    });
    await new Promise((resolve) => {
        setTimeout( () => {
            resolve();
        }, 1000);
    });
    await new Promise((resolve) => {
        setTimeout( () => {
            resolve();
        }, 1000);
    });
  
    await new Promise((resolve) => {
        setTimeout( () => {
            resolve();
        }, 3000);
    });
    console.timeEnd();
}
start(); //* Tiempo Final 6.022s

//* Ahora veamos como seria si ponemos el mas pesado primero
const newStart = async () => {
    console.time();

    const myPromise = new Promise((resolve) => {
        setTimeout( () => {
            resolve();
        }, 3000);
    });

    await new Promise((resolve) => {
        setTimeout( () => {
            resolve();
        }, 1000);
    });
    await new Promise((resolve) => {
        setTimeout( () => {
            resolve();
        }, 1000);
    });
    await new Promise((resolve) => {
        setTimeout( () => {
            resolve();
        }, 1000);
    });
    
    await myPromise

    console.timeEnd();
}
newStart(); //* Tiempo Final 3.026s

//* Tambien podemos hacer que se ejecuten todo en paralelos
//Todas se lanzan al mismo tiempo y el .all hace el await paara que sea orden (mantenga el orden)
const  parallelStart = async () => {
    console.time();
    const numbers = await Promise.all([
        new Promise((resolve) => {
        setTimeout( () => {
            resolve(3);
        }, 1000)
        }),
        new Promise((resolve) => {
        setTimeout( () => {
            resolve(2);
        }, 1000)
        }),
        new Promise((resolve) => {
        setTimeout( () => {
            resolve(1);
        }, 1000)
        })
    ]);
    console.log(numbers);
    console.timeEnd(); 
}
parallelStart(); //* Tiempo Final 1.010s - Esta ejecucion devuelve en orden

//Nos sirve para manejar multiples promesas, devuelve un objeto con las promesas que se resolvieron y cuales no y no se detiene en ejecucion
Promise.allSettled 
*/
const  allPromiseStart = async () => {
    console.time();
    const myPromise = new Promise((resolve) => {
        setTimeout( () => {
            resolve();
        }, 3000);
    });
    await Promise.all([
        new Promise((resolve) => {
        setTimeout( () => {
            resolve();
        }, 1000)
        }),
        new Promise((resolve) => {
        setTimeout( () => {
            resolve();
        }, 1000)
        }),
        new Promise((resolve) => {
        setTimeout( () => {
            resolve();
        }, 1000)
        })
    ]);
    await myPromise
    console.timeEnd(); 
}
allPromiseStart(); 
