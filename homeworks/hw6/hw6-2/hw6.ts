// Перевести до великого регістру наступні стрінгові значення
//
//       ‘hello world’, ‘lorem ipsum’, ‘javascript is cool’

let str12: string[] = ['hello world', 'lorem ipsum', 'javascript is cool']
for (let caps of str12) {
    console.log(caps.toUpperCase());
}