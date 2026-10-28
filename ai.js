// После создания НОВОГО Worker вставьте его настоящий адрес ОДИН раз ниже.
const AI_API_URL = "ЖАҢА_CLOUDFLARE_WORKER_URL";
export async function askAI(payload){
 if(AI_API_URL==='ЖАҢА_CLOUDFLARE_WORKER_URL')throw new Error('ИИ ещё не подключён администратором сайта.');
 const controller=new AbortController();const timer=setTimeout(()=>controller.abort(),30000);
 try{const r=await fetch(`${AI_API_URL.replace(/\/$/,'')}/api/chat`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload),signal:controller.signal});const data=await r.json();if(!r.ok)throw new Error(data.error||'Ошибка ИИ');return data.reply;}finally{clearTimeout(timer)}
}
