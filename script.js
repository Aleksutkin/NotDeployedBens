const workingBens = [ 'ben29d.sima-land.ru', 'ben12d.sima-land.ru', 'ben25d.sima-land.ru', 'ben26d.sima-land.ru', 'ben27d.sima-land.ru', 'ben23d.sima-land.ru', 'ben3d.sima-land.ru', 'ben34d.sima-land.ru', 'ben10d.sima-land.ru', 'ben28d.sima-land.ru', 'ben1d.sima-land.ru', 'ben4d.sima-land.ru', 'ben6d.sima-land.ru', 'ben2d.sima-land.ru', 'ben33d.sima-land.ru', 'ben24d.sima-land.ru', 'ben5d.sima-land.ru', 'ben7d.sima-land.ru', 'ben8d.sima-land.ru', 'ben32d.sima-land.ru', 'ben30d.sima-land.ru', 'ben31d.sima-land.ru', 'ben16d.sima-land.ru', 'ben18d.sima-land.ru', 'ben13d.sima-land.ru', 'ben22d.sima-land.ru', 'ben21d.sima-land.ru', 'ben15d.sima-land.ru', 'ben14d.sima-land.ru', 'ben11d.sima-land.ru', 'ben17d.sima-land.ru', 'bigbend.sima-land.ru', 'bigben2.sima-land.ru', 'runnerd.sima-land.ru', 'generator.sima-land.ru' ]

const getNotDeployedBens = () => {
  const str = document.getElementById('bens') && document.getElementById('bens').value
  const arr = str.split(" ");
  let deployedBens = [];
  let notDeployedBens = [];
  for (const deployedBen of arr) {
    if (deployedBen.substring(0, 3) === 'ben' || 'big' || 'run' || 'gen') {
      deployedBens.push(deployedBen);
    }
  }
  for (const ben of workingBens) {
    if (!deployedBens.includes(ben)) {
      notDeployedBens.push(ben)
    }
  }
  if (notDeployedBens.length === 0) {
    return alert("Все бены задеплоены")
  }
  if (notDeployedBens.length === 1) {
    return alert("Не задеплоен: " + notDeployedBens)
  }  
  if (notDeployedBens.length > 1) {
    return alert("Не задеплоены: " + notDeployedBens.join(', '))
  }    
}
