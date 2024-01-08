const fs = require ("fs");
const readline = require ("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  const file_name="customer_data.txt";

  const appendFileData = () =>{
    rl.question('Enter name: ', (name) => {
        rl.question('Enter age: ', (age) => {
          rl.question('Enter job: ', (job) => {
            const data = `\nName: ${name}\nAge: ${age}\nJob: ${job}\n`;
            fs.appendFile(file_name, data, (err) => {
                if (err) {
                  console.error('Error while writing into the file:', err);
                } else {
                  console.log('Data saved to file successfully.');
                }
                rl.close();
              });
            });
          });
        });
    };

    const displayContent = () =>{
        fs.readFile(file_name,'utf8',(err, data)=>{
            if(err){
                console.log("Error in displaying file", err);
            }else{
                console.log("CONTENT :\n", data);
            }
        });
    };
   
  appendFileData();

  setTimeout(()=>{
    displayContent();
  }, 10000);

  let root = 3;
