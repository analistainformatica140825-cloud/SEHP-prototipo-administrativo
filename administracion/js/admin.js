const KEY="sehyp_admin_data_v2";
const emptyData={clientes:[],vehiculos:[],servicios:[],inventario:[],cotizaciones:[],pagos:[]};
const demoData={
 clientes:[
  {id:101,nombre:"Alejandro Martínez",telefono:"722 310 4821",correo:"alejandro.martinez@ejemplo.com",fecha:"2026-08-04"},
  {id:102,nombre:"Fernanda López",telefono:"722 418 7590",correo:"fernanda.lopez@ejemplo.com",fecha:"2026-08-11"},
  {id:103,nombre:"Ricardo Hernández",telefono:"729 215 6634",correo:"ricardo.hernandez@ejemplo.com",fecha:"2026-08-19"},
  {id:104,nombre:"Mariana Sánchez",telefono:"722 587 2109",correo:"mariana.sanchez@ejemplo.com",fecha:"2026-08-27"},
  {id:105,nombre:"Jorge Ramírez",telefono:"722 643 9715",correo:"jorge.ramirez@ejemplo.com",fecha:"2026-09-02"},
  {id:106,nombre:"Patricia Gómez",telefono:"729 384 1206",correo:"patricia.gomez@ejemplo.com",fecha:"2026-09-07"},
  {id:107,nombre:"Eduardo Torres",telefono:"722 751 4380",correo:"eduardo.torres@ejemplo.com",fecha:"2026-09-12"},
  {id:108,nombre:"Gabriela Flores",telefono:"722 906 2147",correo:"gabriela.flores@ejemplo.com",fecha:"2026-09-17"}
 ],
 vehiculos:[
  {id:201,marca:"Nissan",modelo:"Versa",anio:"2021",placas:"NPA-284-A",color:"Gris",cliente:"Alejandro Martínez",observaciones:"Golpe visible en salpicadera delantera derecha."},
  {id:202,marca:"Chevrolet",modelo:"Aveo",anio:"2020",placas:"MTC-591-B",color:"Blanco",cliente:"Fernanda López",observaciones:"Rayones y abolladura en puerta trasera izquierda."},
  {id:203,marca:"Volkswagen",modelo:"Vento",anio:"2019",placas:"NLD-773-C",color:"Azul",cliente:"Ricardo Hernández",observaciones:"Defensa trasera con daño superficial."},
  {id:204,marca:"Kia",modelo:"Rio",anio:"2022",placas:"PFG-148-D",color:"Rojo",cliente:"Mariana Sánchez",observaciones:"Daño en cofre y fascia delantera."},
  {id:205,marca:"Toyota",modelo:"Corolla",anio:"2018",placas:"MZR-620-E",color:"Plata",cliente:"Jorge Ramírez",observaciones:"Pintura deteriorada en techo y cofre."},
  {id:206,marca:"Mazda",modelo:"3",anio:"2023",placas:"PVA-934-F",color:"Negro",cliente:"Patricia Gómez",observaciones:"Rayón profundo en costado derecho."},
  {id:207,marca:"Hyundai",modelo:"Accent",anio:"2020",placas:"NUR-415-G",color:"Blanco",cliente:"Eduardo Torres",observaciones:"Reparación de defensa delantera."},
  {id:208,marca:"Ford",modelo:"Fiesta",anio:"2017",placas:"MXS-862-H",color:"Azul",cliente:"Gabriela Flores",observaciones:"Abolladura en puerta del conductor."}
 ],
 servicios:[
  {id:301,folio:"OS-0001",cliente:"Alejandro Martínez",vehiculo:"Nissan Versa",tipo:"Hojalatería",entrada:"2026-08-05",entrega:"2026-08-09",total:5800,anticipo:2500,estado:"Entregado",detalle:"Reparación y alineación de salpicadera delantera derecha; preparación y retoque de pintura.",observaciones:"Vehículo recibido con herramienta y llanta de refacción.",fotos:"antes_versa_01.jpg, despues_versa_01.jpg"},
  {id:302,folio:"OS-0002",cliente:"Fernanda López",vehiculo:"Chevrolet Aveo",tipo:"Pintura parcial",entrada:"2026-08-12",entrega:"2026-08-16",total:4600,anticipo:2000,estado:"Entregado",detalle:"Corrección de abolladura y pintura de puerta trasera izquierda.",observaciones:"Sin objetos de valor al momento de recepción.",fotos:"aveo_proceso.jpg"},
  {id:303,folio:"OS-0003",cliente:"Ricardo Hernández",vehiculo:"Volkswagen Vento",tipo:"Reparación de defensa",entrada:"2026-08-20",entrega:"2026-08-23",total:3200,anticipo:1500,estado:"Entregado",detalle:"Reparación, preparación y pintura de defensa trasera.",observaciones:"Daño superficial sin afectación estructural.",fotos:"vento_defensa.jpg"},
  {id:304,folio:"OS-0004",cliente:"Mariana Sánchez",vehiculo:"Kia Rio",tipo:"Hojalatería",entrada:"2026-08-28",entrega:"2026-09-03",total:8900,anticipo:4000,estado:"Terminado",detalle:"Reparación de cofre, ajuste de fascia delantera y aplicación de pintura.",observaciones:"Pendiente entrega al cliente.",fotos:"kia_antes.jpg, kia_final.jpg"},
  {id:305,folio:"OS-0005",cliente:"Jorge Ramírez",vehiculo:"Toyota Corolla",tipo:"Pintura general",entrada:"2026-09-03",entrega:"2026-09-10",total:14500,anticipo:7000,estado:"Terminado",detalle:"Preparación de superficies y repintado general con acabado y pulido.",observaciones:"Cliente solicitó conservar tono original.",fotos:"corolla_proceso.jpg"},
  {id:306,folio:"OS-0006",cliente:"Patricia Gómez",vehiculo:"Mazda 3",tipo:"Pintura parcial",entrada:"2026-09-08",entrega:"2026-09-13",total:5200,anticipo:2500,estado:"En proceso",detalle:"Corrección de rayón profundo, preparación y pintura de costado derecho.",observaciones:"Trabajo en etapa de preparación.",fotos:"mazda_antes.jpg"},
  {id:307,folio:"OS-0007",cliente:"Eduardo Torres",vehiculo:"Hyundai Accent",tipo:"Reparación de defensa",entrada:"2026-09-13",entrega:"2026-09-18",total:4100,anticipo:2000,estado:"En proceso",detalle:"Reparación de fascia delantera y pintura.",observaciones:"En espera de acabado final.",fotos:"accent_proceso.jpg"},
  {id:308,folio:"OS-0008",cliente:"Gabriela Flores",vehiculo:"Ford Fiesta",tipo:"Hojalatería",entrada:"2026-09-18",entrega:"2026-09-24",total:6300,anticipo:3000,estado:"Recibido",detalle:"Reparación de abolladura en puerta del conductor y posterior pintura.",observaciones:"Vehículo pendiente de ingreso a área de reparación.",fotos:"fiesta_recepcion.jpg"},
  {id:309,folio:"OS-0009",cliente:"Alejandro Martínez",vehiculo:"Nissan Versa",tipo:"Pulido y detallado",entrada:"2026-09-20",entrega:"2026-09-22",total:1800,anticipo:900,estado:"Entregado",detalle:"Pulido de carrocería y detallado exterior.",observaciones:"Servicio adicional solicitado por el cliente.",fotos:"versa_detallado.jpg"},
  {id:310,folio:"OS-0010",cliente:"Ricardo Hernández",vehiculo:"Volkswagen Vento",tipo:"Pintura parcial",entrada:"2026-09-22",entrega:"2026-09-26",total:3900,anticipo:1500,estado:"Recibido",detalle:"Pintura de fascia delantera por raspaduras y pérdida de acabado.",observaciones:"Recepción sin daños adicionales reportados.",fotos:"vento_fascia.jpg"}
 ],
 inventario:[
  {id:401,producto:"Primer automotriz",categoria:"Pintura",existencia:8,minimo:3,unidad:"L",proveedor:"Proveedor demo A"},
  {id:402,producto:"Thinner acrílico",categoria:"Solventes",existencia:12,minimo:5,unidad:"L",proveedor:"Proveedor demo A"},
  {id:403,producto:"Barniz transparente",categoria:"Pintura",existencia:2,minimo:3,unidad:"L",proveedor:"Proveedor demo B"},
  {id:404,producto:"Lija P400",categoria:"Abrasivos",existencia:35,minimo:10,unidad:"pzas",proveedor:"Proveedor demo C"},
  {id:405,producto:"Masilla automotriz",categoria:"Hojalatería",existencia:1,minimo:2,unidad:"kg",proveedor:"Proveedor demo B"},
  {id:406,producto:"Cinta masking",categoria:"Consumibles",existencia:4,minimo:5,unidad:"rollos",proveedor:"Proveedor demo C"},
  {id:407,producto:"Lija P800",categoria:"Abrasivos",existencia:24,minimo:10,unidad:"pzas",proveedor:"Proveedor demo C"},
  {id:408,producto:"Desengrasante",categoria:"Preparación",existencia:6,minimo:2,unidad:"L",proveedor:"Proveedor demo A"}
 ],
 cotizaciones:[
  {id:501,folio:"COT-0001",fecha:"2026-09-19",cliente:"Mariana Sánchez",vehiculo:"Kia Rio",estado:"Aceptada",validez:"15",conceptos:[{descripcion:"Reparación de cofre y preparación",cantidad:1,precio:3500},{descripcion:"Pintura de cofre y fascia delantera",cantidad:1,precio:4200}],notas:"Cotización sujeta a revisión final al desmontar piezas."},
  {id:502,folio:"COT-0002",fecha:"2026-09-21",cliente:"Gabriela Flores",vehiculo:"Ford Fiesta",estado:"Pendiente",validez:"15",conceptos:[{descripcion:"Hojalatería en puerta del conductor",cantidad:1,precio:2800},{descripcion:"Pintura y acabado de puerta",cantidad:1,precio:3000}],notas:"Incluye materiales y mano de obra."},
  {id:503,folio:"COT-0003",fecha:"2026-09-22",cliente:"Eduardo Torres",vehiculo:"Hyundai Accent",estado:"Pendiente",validez:"10",conceptos:[{descripcion:"Reparación de defensa delantera",cantidad:1,precio:2100},{descripcion:"Preparación y pintura",cantidad:1,precio:1900}],notas:"Tiempo estimado de trabajo: 3 a 4 días hábiles."}
 ],
 pagos:[
 {id:601,servicioId:301,fecha:"2026-08-05",importe:2500,metodo:"Transferencia",concepto:"Anticipo",nota:""},
 {id:602,servicioId:301,fecha:"2026-08-09",importe:3300,metodo:"Efectivo",concepto:"Liquidación",nota:""},
 {id:603,servicioId:302,fecha:"2026-08-12",importe:2000,metodo:"Efectivo",concepto:"Anticipo",nota:""},
 {id:604,servicioId:302,fecha:"2026-08-16",importe:2600,metodo:"Transferencia",concepto:"Liquidación",nota:""},
 {id:605,servicioId:303,fecha:"2026-08-20",importe:1500,metodo:"Efectivo",concepto:"Anticipo",nota:""},
 {id:606,servicioId:303,fecha:"2026-08-23",importe:1700,metodo:"Tarjeta",concepto:"Liquidación",nota:""},
 {id:607,servicioId:304,fecha:"2026-08-28",importe:4000,metodo:"Transferencia",concepto:"Anticipo",nota:""},
 {id:608,servicioId:305,fecha:"2026-09-03",importe:7000,metodo:"Transferencia",concepto:"Anticipo",nota:""},
 {id:609,servicioId:306,fecha:"2026-09-08",importe:2500,metodo:"Efectivo",concepto:"Anticipo",nota:""},
 {id:610,servicioId:307,fecha:"2026-09-13",importe:2000,metodo:"Efectivo",concepto:"Anticipo",nota:""},
 {id:611,servicioId:308,fecha:"2026-09-18",importe:3000,metodo:"Transferencia",concepto:"Anticipo",nota:""},
 {id:612,servicioId:309,fecha:"2026-09-20",importe:900,metodo:"Efectivo",concepto:"Anticipo",nota:""},
 {id:613,servicioId:309,fecha:"2026-09-22",importe:900,metodo:"Efectivo",concepto:"Liquidación",nota:""}
 ]
};

function load(){
  try{
    const saved=JSON.parse(localStorage.getItem(KEY));
    if(saved && saved.clientes){ if(!saved.cotizaciones) saved.cotizaciones=structuredClone(demoData.cotizaciones||[]); if(!saved.pagos) saved.pagos=structuredClone(demoData.pagos||[]); return saved; }
    const initial=structuredClone(demoData);
    localStorage.setItem(KEY,JSON.stringify(initial));
    return initial;
  }catch(e){return structuredClone(demoData)}
}
let data=load();
function save(){localStorage.setItem(KEY,JSON.stringify(data))}
function esc(v=""){return String(v).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]))}
function money(n){return new Intl.NumberFormat("es-MX",{style:"currency",currency:"MXN"}).format(Number(n)||0)}
function fmtDate(s){if(!s)return"—";return new Intl.DateTimeFormat("es-MX",{year:"numeric",month:"short",day:"2-digit"}).format(new Date(s+"T12:00:00"))}
function slug(s){return String(s).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/\s+/g,"-")}
function toast(msg){const t=document.getElementById("toast");if(!t)return;t.textContent=msg;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),2200)}

document.addEventListener("DOMContentLoaded",()=>{
 const login=document.getElementById("login-form");
 if(login){
   login.addEventListener("submit",e=>{
     e.preventDefault();
     const u=document.getElementById("usuario").value.trim(),p=document.getElementById("password").value;
     if(u==="admin"&&p==="taller2026"){
       sessionStorage.setItem("sehyp_auth","1");location.href="panel.html";
     }else document.getElementById("login-msg").textContent="Usuario o contraseña incorrectos.";
   });
   return;
 }
 if(location.pathname.endsWith("panel.html")&&!sessionStorage.getItem("sehyp_auth")){location.href="index.html";return}
 initPanel();
});

function initPanel(){
 document.getElementById("fecha").textContent=new Intl.DateTimeFormat("es-MX",{weekday:"long",day:"numeric",month:"long"}).format(new Date());
 document.querySelectorAll(".nav-item").forEach(b=>b.addEventListener("click",()=>showSection(b.dataset.section)));
 document.querySelectorAll("[data-go]").forEach(b=>b.addEventListener("click",()=>showSection(b.dataset.go)));
 document.getElementById("menu-toggle").addEventListener("click",()=>document.getElementById("sidebar").classList.toggle("open"));
 document.getElementById("logout").addEventListener("click",()=>{sessionStorage.removeItem("sehyp_auth");location.href="index.html"});
 document.querySelectorAll("[data-open-modal]").forEach(b=>b.addEventListener("click",()=>openModal(b.dataset.openModal)));
 document.querySelectorAll("[data-close-modal]").forEach(b=>b.addEventListener("click",closeModal));
 document.querySelectorAll("[data-search]").forEach(i=>i.addEventListener("input",renderAll));
 document.getElementById("filtro-estado")?.addEventListener("change",renderAll);
 document.getElementById("filtro-cotizacion")?.addEventListener("change",renderAll); document.getElementById("filtro-pago")?.addEventListener("change",renderAll);
 document.getElementById("exportar")?.addEventListener("click",exportData);
 document.getElementById("print-reports")?.addEventListener("click",()=>window.print());
 renderAll();
}

function showSection(id){
 document.querySelectorAll(".admin-section").forEach(s=>s.classList.toggle("active",s.id===id));
 document.querySelectorAll(".nav-item").forEach(b=>b.classList.toggle("active",b.dataset.section===id));
 const titles={dashboard:"Resumen general",clientes:"Clientes",vehiculos:"Vehículos",servicios:"Órdenes de servicio",inventario:"Inventario",cotizaciones:"Cotizaciones",pagos:"Pagos y adeudos",reportes:"Reportes"};
 document.getElementById("page-title").textContent=titles[id]||"Administración";
 document.getElementById("sidebar").classList.remove("open");renderAll();
}

function qSearch(name){return (document.querySelector(`[data-search="${name}"]`)?.value||"").toLowerCase()}
function renderAll(){renderStats();renderClientes();renderVehiculos();renderServicios();renderInventario();renderCotizaciones();renderPagos();renderReports()}

function renderStats(){
 const proc=data.servicios.filter(x=>x.estado==="En proceso").length;
 const term=data.servicios.filter(x=>["Terminado","Entregado"].includes(x.estado)).length;
 const low=data.inventario.filter(x=>Number(x.existencia)<=Number(x.minimo)).length;
 document.getElementById("stat-servicios").textContent=data.servicios.length;
 document.getElementById("stat-proceso").textContent=proc;
 document.getElementById("stat-terminados").textContent=term;
 document.getElementById("stat-stock").textContent=low;
 const recent=[...data.servicios].sort((a,b)=>b.id-a.id).slice(0,5);
 document.getElementById("recent-services").innerHTML=recent.length?recent.map(x=>`<tr><td><b>${esc(x.folio)}</b></td><td>${esc(x.cliente)}</td><td>${esc(x.vehiculo)}</td><td>${esc(x.tipo)}</td><td><span class="badge ${slug(x.estado)}">${esc(x.estado)}</span></td></tr>`).join(""):`<tr><td colspan="5" class="empty">Aún no hay servicios registrados.</td></tr>`;
 const lows=data.inventario.filter(x=>Number(x.existencia)<=Number(x.minimo));
 document.getElementById("stock-alerts").innerHTML=lows.length?lows.map(x=>`<div class="alert-item"><strong>${esc(x.producto)}</strong><span>${x.existencia} ${esc(x.unidad)} disponibles</span></div>`).join(""):`<div class="empty">Sin alertas de inventario.</div>`;
}

function renderClientes(){
 const q=qSearch("clientes"),rows=data.clientes.filter(x=>Object.values(x).join(" ").toLowerCase().includes(q));
 document.getElementById("clientes-table").innerHTML=rows.length?rows.map(x=>`<tr><td><b>${esc(x.nombre)}</b></td><td>${esc(x.telefono)}</td><td>${esc(x.correo||"—")}</td><td>${fmtDate(x.fecha)}</td><td><button class="action-btn" onclick="editItem('cliente',${x.id})" title="Editar"><i class="fa-solid fa-pen"></i></button><button class="action-btn delete" onclick="deleteItem('clientes',${x.id})" title="Eliminar"><i class="fa-solid fa-trash"></i></button></td></tr>`).join(""):`<tr><td colspan="5" class="empty">Aún no hay clientes registrados.</td></tr>`;
}

function renderVehiculos(){
 const q=qSearch("vehiculos"),rows=data.vehiculos.filter(x=>Object.values(x).join(" ").toLowerCase().includes(q));
 document.getElementById("vehiculos-table").innerHTML=rows.length?rows.map(x=>`<tr><td><b>${esc(x.marca)} ${esc(x.modelo)}</b></td><td>${esc(x.anio||"—")}</td><td>${esc(x.placas)}</td><td>${esc(x.color||"—")}</td><td>${esc(x.cliente)}</td><td><button class="action-btn" onclick="editItem('vehiculo',${x.id})" title="Editar"><i class="fa-solid fa-pen"></i></button><button class="action-btn delete" onclick="deleteItem('vehiculos',${x.id})" title="Eliminar"><i class="fa-solid fa-trash"></i></button></td></tr>`).join(""):`<tr><td colspan="6" class="empty">Aún no hay vehículos registrados.</td></tr>`;
}

function renderServicios(){
 const q=qSearch("servicios"),estado=document.getElementById("filtro-estado")?.value||"";
 const rows=data.servicios.filter(x=>Object.values(x).join(" ").toLowerCase().includes(q)&&(!estado||x.estado===estado));
 document.getElementById("servicios-table").innerHTML=rows.length?rows.map(x=>{
   const saldo=Math.max(0,Number(x.total||0)-Number(x.anticipo||0));
   return `<tr><td><b>${esc(x.folio)}</b></td><td>${esc(x.cliente)}</td><td>${esc(x.vehiculo)}</td><td>${esc(x.tipo)}</td><td>${fmtDate(x.entrada)}</td><td>${fmtDate(x.entrega)}</td><td>${money(saldo)}</td><td><span class="badge ${slug(x.estado)}">${esc(x.estado)}</span></td><td><button class="action-btn print" onclick="printOrder(${x.id})" title="Imprimir ficha"><i class="fa-solid fa-print"></i></button><button class="action-btn" onclick="editItem('servicio',${x.id})" title="Editar"><i class="fa-solid fa-pen"></i></button><button class="action-btn delete" onclick="deleteItem('servicios',${x.id})" title="Eliminar"><i class="fa-solid fa-trash"></i></button></td></tr>`;
 }).join(""):`<tr><td colspan="9" class="empty">Aún no hay órdenes de servicio registradas.</td></tr>`;
}

function renderInventario(){
 const q=qSearch("inventario"),rows=data.inventario.filter(x=>Object.values(x).join(" ").toLowerCase().includes(q));
 document.getElementById("inventario-table").innerHTML=rows.length?rows.map(x=>{const low=Number(x.existencia)<=Number(x.minimo);return `<tr><td><b>${esc(x.producto)}</b></td><td>${esc(x.categoria)}</td><td>${x.existencia}</td><td>${x.minimo}</td><td>${esc(x.unidad)}</td><td><span class="badge ${low?"bajo":"ok"}">${low?"Existencia baja":"Disponible"}</span></td><td><button class="action-btn" onclick="editItem('inventario',${x.id})" title="Editar"><i class="fa-solid fa-pen"></i></button><button class="action-btn delete" onclick="deleteItem('inventario',${x.id})" title="Eliminar"><i class="fa-solid fa-trash"></i></button></td></tr>`}).join(""):`<tr><td colspan="7" class="empty">Aún no hay productos registrados.</td></tr>`;
}

function cotTotal(x){return (x.conceptos||[]).reduce((s,c)=>s+(Number(c.cantidad)||0)*(Number(c.precio)||0),0)}
function renderCotizaciones(){
 const el=document.getElementById("cotizaciones-table");if(!el)return;
 const q=qSearch("cotizaciones"),estado=document.getElementById("filtro-cotizacion")?.value||"";
 const rows=(data.cotizaciones||[]).filter(x=>Object.values(x).join(" ").toLowerCase().includes(q)&&(!estado||x.estado===estado));
 el.innerHTML=rows.length?rows.map(x=>`<tr><td><b>${esc(x.folio)}</b></td><td>${esc(x.cliente)}</td><td>${esc(x.vehiculo)}</td><td>${fmtDate(x.fecha)}</td><td><b>${money(cotTotal(x))}</b></td><td><span class="badge ${slug(x.estado)}">${esc(x.estado)}</span></td><td><button class="action-btn print" onclick="printQuote(${x.id})" title="Imprimir"><i class="fa-solid fa-print"></i></button><button class="action-btn" onclick="editItem('cotizacion',${x.id})" title="Editar"><i class="fa-solid fa-pen"></i></button>${x.estado!=="Convertida"?`<button class="action-btn convert" onclick="convertQuote(${x.id})" title="Convertir en orden"><i class="fa-solid fa-arrow-right-arrow-left"></i></button>`:""}<button class="action-btn delete" onclick="deleteItem('cotizaciones',${x.id})" title="Eliminar"><i class="fa-solid fa-trash"></i></button></td></tr>`).join(""):`<tr><td colspan="7" class="empty">Aún no hay cotizaciones registradas.</td></tr>`;
}


function pagosServicio(id){return (data.pagos||[]).filter(p=>Number(p.servicioId)===Number(id))}
function totalPagadoServicio(s){const ps=pagosServicio(s.id);return ps.length?ps.reduce((a,p)=>a+Number(p.importe||0),0):Number(s.anticipo||0)}
function saldoServicio(s){return Math.max(0,Number(s.total||0)-totalPagadoServicio(s))}
function renderPagos(){
 const table=document.getElementById("pagos-table");if(!table)return;
 const q=qSearch("pagos"),f=document.getElementById("filtro-pago")?.value||"";
 const rows=data.servicios.filter(s=>{const sal=saldoServicio(s);return `${s.folio} ${s.cliente} ${s.vehiculo}`.toLowerCase().includes(q)&&(!f||(f==="adeudo"&&sal>0)||(f==="pagado"&&sal<=0))});
 table.innerHTML=rows.length?rows.map(s=>{const paid=totalPagadoServicio(s),sal=saldoServicio(s),done=sal<=0;return `<tr><td><b>${esc(s.folio)}</b></td><td>${esc(s.cliente)}</td><td>${esc(s.vehiculo)}</td><td>${money(s.total)}</td><td>${money(paid)}</td><td><b>${money(sal)}</b></td><td><span class="badge ${done?"pagado":"adeudo"}">${done?"Pagado":"Adeudo"}</span></td><td>${!done?`<button class="action-btn pay" onclick="quickPay(${s.id})" title="Registrar pago"><i class="fa-solid fa-money-bill-wave"></i></button>`:""}<button class="action-btn print" onclick="printPaymentStatement(${s.id})" title="Estado de cuenta"><i class="fa-solid fa-receipt"></i></button></td></tr>`}).join(""):`<tr><td colspan="8" class="empty">No hay órdenes que coincidan.</td></tr>`;
 const hist=document.getElementById("historial-pagos"),mov=[...(data.pagos||[])].sort((a,b)=>(b.fecha||"").localeCompare(a.fecha||""));
 hist.innerHTML=mov.length?mov.map(p=>{const s=data.servicios.find(x=>Number(x.id)===Number(p.servicioId));return `<tr><td>${fmtDate(p.fecha)}</td><td><b>${esc(s?.folio||"—")}</b></td><td>${esc(s?.cliente||"—")}</td><td>${esc(p.concepto)}</td><td>${esc(p.metodo)}</td><td><b>${money(p.importe)}</b></td><td><button class="action-btn delete" onclick="deletePayment(${p.id})"><i class="fa-solid fa-trash"></i></button></td></tr>`}).join(""):`<tr><td colspan="7" class="empty">Aún no hay pagos.</td></tr>`;
 const total=data.servicios.reduce((a,s)=>a+Number(s.total||0),0),rec=data.servicios.reduce((a,s)=>a+Math.min(Number(s.total||0),totalPagadoServicio(s)),0),pend=data.servicios.reduce((a,s)=>a+saldoServicio(s),0);
 document.getElementById("pay-total").textContent=money(total);document.getElementById("pay-received").textContent=money(rec);document.getElementById("pay-pending").textContent=money(pend);document.getElementById("pay-debt-count").textContent=data.servicios.filter(s=>saldoServicio(s)>0).length;
}

function renderReports(){
 const orders=data.servicios||[],quotes=data.cotizaciones||[],inventory=data.inventario||[];
 const total=orders.reduce((a,s)=>a+Number(s.total||0),0);
 const income=orders.reduce((a,s)=>a+Math.min(Number(s.total||0),totalPagadoServicio(s)),0);
 const debt=orders.reduce((a,s)=>a+saldoServicio(s),0);
 const ticket=orders.length?total/orders.length:0;
 const set=(id,val)=>{const e=document.getElementById(id);if(e)e.textContent=val};
 set("r-total",money(total));set("r-income",money(income));set("r-debt",money(debt));set("r-ticket",money(ticket));set("r-orders",orders.length);
 set("r-clients",data.clientes.length);set("r-vehicles",data.vehiculos.length);set("r-quotes",quotes.length);
 set("r-accepted",quotes.filter(q=>["Aceptada","Convertida"].includes(q.estado)).length);
 set("r-products",inventory.length);set("r-low-stock",inventory.filter(x=>Number(x.existencia)<=Number(x.minimo)).length);
 set("r-debt-orders",orders.filter(s=>saldoServicio(s)>0).length);
 set("r-completed",orders.filter(s=>["Terminado","Entregado"].includes(s.estado)).length);

 const estados=["Recibido","En proceso","Terminado","Entregado"],maxState=Math.max(1,...estados.map(e=>orders.filter(s=>s.estado===e).length));
 const est=document.getElementById("report-estados");
 if(est) est.innerHTML=estados.map(e=>{const n=orders.filter(s=>s.estado===e).length,p=Math.round(n/maxState*100);return `<div class="bar-row"><span>${e}</span><div class="bar-track"><div class="bar-fill" style="width:${p}%"></div></div><b>${n}</b></div>`}).join("");

 const counts={};orders.forEach(s=>counts[s.tipo||"Otro"]=(counts[s.tipo||"Otro"]||0)+1);
 const serviceRows=Object.entries(counts).sort((a,b)=>b[1]-a[1]),maxSvc=Math.max(1,...serviceRows.map(x=>x[1]));
 const srv=document.getElementById("report-services");
 if(srv) srv.innerHTML=serviceRows.length?serviceRows.map(([name,n])=>`<div class="bar-row"><span>${esc(name)}</span><div class="bar-track"><div class="bar-fill" style="width:${Math.round(n/maxSvc*100)}%"></div></div><b>${n}</b></div>`).join(""):`<div class="empty">Sin información.</div>`;

 const monthMap={};orders.forEach(s=>{if(s.entrada){const k=s.entrada.slice(0,7);monthMap[k]=(monthMap[k]||0)+1}});
 const months=Object.entries(monthMap).sort((a,b)=>a[0].localeCompare(b[0])).slice(-6),maxMonth=Math.max(1,...months.map(x=>x[1]));
 const mch=document.getElementById("report-months");
 if(mch) mch.innerHTML=months.length?months.map(([k,n])=>{const d=new Date(k+"-15T12:00:00"),lab=new Intl.DateTimeFormat("es-MX",{month:"short"}).format(d);return `<div class="month-col"><div class="month-value">${n}</div><div class="month-bar-wrap"><div class="month-bar" style="height:${Math.max(8,Math.round(n/maxMonth*150))}px"></div></div><span>${lab}</span></div>`}).join(""):`<div class="empty">Sin información mensual.</div>`;

 const pct=total?Math.round(income/total*100):0;set("r-paid-pct",pct+"%");set("r-paid-legend",money(income));set("r-debt-legend",money(debt));
 const donut=document.getElementById("payment-donut");if(donut)donut.style.setProperty("--paid",Math.max(0,Math.min(100,pct))+"%");
}

function clientOptions(selected=""){
 if(!data.clientes.length) return `<option value="">Primero registra un cliente</option>`;
 return `<option value="">Selecciona un cliente</option>`+data.clientes.map(c=>`<option ${c.nombre===selected?"selected":""}>${esc(c.nombre)}</option>`).join("");
}
function vehicleOptions(selected=""){
 if(!data.vehiculos.length) return `<option value="">Primero registra un vehículo</option>`;
 return `<option value="">Selecciona un vehículo</option>`+data.vehiculos.map(v=>{const name=`${v.marca} ${v.modelo}`;return `<option ${name===selected?"selected":""}>${esc(name)}</option>`}).join("");
}

function conceptRow(c={},i=0){return `<div class="concept-row"><input class="cdesc" placeholder="Descripción del trabajo o material" value="${esc(c.descripcion||"")}" required><input class="ccant" type="number" min=".01" step=".01" value="${c.cantidad??1}" title="Cantidad"><input class="cprecio" type="number" min="0" step=".01" value="${c.precio??0}" title="Precio unitario"><button type="button" class="action-btn delete remove-concept" title="Quitar"><i class="fa-solid fa-xmark"></i></button></div>`}

function openModal(type,item=null){
 const c=document.getElementById("modal-content"),today=new Date().toISOString().slice(0,10);let html="";
 if(type==="cliente")html=`<span class="eyebrow">Directorio</span><h2>${item?"Editar":"Nuevo"} cliente</h2><form id="modal-form" class="form-grid"><label>Nombre completo<input name="nombre" required value="${esc(item?.nombre||"")}"></label><label>Teléfono<input name="telefono" required value="${esc(item?.telefono||"")}"></label><label>Correo electrónico<input name="correo" type="email" value="${esc(item?.correo||"")}"></label><label>Fecha de registro<input name="fecha" type="date" value="${item?.fecha||today}"></label><div class="form-actions full-row"><button type="button" class="btn-secondary" data-close-modal>Cancelar</button><button class="btn-primary">Guardar cliente</button></div></form>`;
 if(type==="vehiculo")html=`<span class="eyebrow">Directorio</span><h2>${item?"Editar":"Registrar"} vehículo</h2><form id="modal-form" class="form-grid"><label>Marca<input name="marca" required value="${esc(item?.marca||"")}"></label><label>Modelo<input name="modelo" required value="${esc(item?.modelo||"")}"></label><label>Año<input name="anio" inputmode="numeric" value="${esc(item?.anio||"")}"></label><label>Placas<input name="placas" required value="${esc(item?.placas||"")}"></label><label>Color<input name="color" value="${esc(item?.color||"")}"></label><label>Cliente<select name="cliente" required>${clientOptions(item?.cliente||"")}</select></label><label class="full-row">Observaciones<textarea name="observaciones" placeholder="Daños visibles, características particulares, etc.">${esc(item?.observaciones||"")}</textarea></label><div class="form-actions full-row"><button type="button" class="btn-secondary" data-close-modal>Cancelar</button><button class="btn-primary">Guardar vehículo</button></div></form>`;
 if(type==="servicio"){
   const next="OS-"+String(Math.max(0,...data.servicios.map(x=>Number(String(x.folio).replace(/\D/g,""))||0))+1).padStart(4,"0");
   html=`<span class="eyebrow">Orden de trabajo</span><h2>${item?"Editar":"Nueva"} orden de servicio</h2><form id="modal-form" class="form-grid">
   <label>Folio<input name="folio" required readonly value="${esc(item?.folio||next)}"></label>
   <label>Fecha de entrada<input name="entrada" type="date" required value="${item?.entrada||today}"></label>
   <label>Cliente<select name="cliente" required>${clientOptions(item?.cliente||"")}</select></label>
   <label>Vehículo<select name="vehiculo" required>${vehicleOptions(item?.vehiculo||"")}</select></label>
   <label>Tipo de servicio<select name="tipo"><option>Hojalatería</option><option>Pintura general</option><option>Pintura parcial</option><option>Reparación de fibra de vidrio</option><option>Pulido y detallado</option><option>Reparación de defensa</option><option>Otro</option></select></label>
   <label>Estado<select name="estado"><option>Recibido</option><option>En proceso</option><option>Terminado</option><option>Entregado</option></select></label>
   <label>Fecha estimada de entrega<input name="entrega" type="date" value="${item?.entrega||""}"></label>
   <label>Costo total<input name="total" type="number" min="0" step=".01" value="${item?.total||0}"></label>
   <label>Anticipo<input name="anticipo" type="number" min="0" step=".01" value="${item?.anticipo||0}"></label>
   <label class="full-row">Descripción del trabajo<textarea name="detalle" required placeholder="Describe los trabajos autorizados y las piezas a reparar.">${esc(item?.detalle||"")}</textarea></label>
   <label class="full-row">Observaciones / condiciones de recepción<textarea name="observaciones" placeholder="Golpes previos, accesorios, objetos entregados, indicaciones del cliente...">${esc(item?.observaciones||"")}</textarea></label>
   <label class="full-row">Fotografías (referencia)<input name="fotos" placeholder="Ej. IMG_001.jpg, IMG_002.jpg" value="${esc(item?.fotos||"")}"><small class="field-help">En esta versión local se registra la referencia. La carga real de archivos se incorporará al conectar una base de datos.</small></label>
   <div class="form-actions full-row"><button type="button" class="btn-secondary" data-close-modal>Cancelar</button><button class="btn-primary">Guardar orden</button></div></form>`;
 }
 if(type==="pago"){const sel=c.querySelector("#pay-service"),amount=c.querySelector("#pay-amount"),info=c.querySelector("#payment-balance-info");sel.addEventListener("change",()=>{const s=data.servicios.find(x=>Number(x.id)===Number(sel.value));if(!s){info.textContent="Selecciona una orden para consultar su saldo.";return}const bal=saldoServicio(s);info.innerHTML=`Saldo actual: <strong>${money(bal)}</strong>`;amount.max=bal;if(!amount.value)amount.value=bal})}
 if(type==="cotizacion"){
   const next="COT-"+String(Math.max(0,...(data.cotizaciones||[]).map(x=>Number(String(x.folio).replace(/\D/g,""))||0))+1).padStart(4,"0");
   const concepts=item?.conceptos?.length?item.conceptos:[{descripcion:"",cantidad:1,precio:0}];
   html=`<span class="eyebrow">Presupuesto</span><h2>${item?"Editar":"Nueva"} cotización</h2><form id="modal-form" class="form-grid quote-form">
   <label>Folio<input name="folio" readonly value="${esc(item?.folio||next)}"></label>
   <label>Fecha<input name="fecha" type="date" required value="${item?.fecha||today}"></label>
   <label>Cliente<select name="cliente" required>${clientOptions(item?.cliente||"")}</select></label>
   <label>Vehículo<select name="vehiculo" required>${vehicleOptions(item?.vehiculo||"")}</select></label>
   <label>Estado<select name="estado"><option>Pendiente</option><option>Aceptada</option><option>Rechazada</option><option>Convertida</option></select></label>
   <label>Vigencia (días)<input name="validez" type="number" min="1" value="${esc(item?.validez||15)}"></label>
   <div class="full-row"><div class="concept-head"><b>Conceptos</b><button type="button" class="btn-secondary small" id="add-concept"><i class="fa-solid fa-plus"></i> Agregar concepto</button></div><div id="concept-list">${concepts.map((c,i)=>conceptRow(c,i)).join("")}</div><div class="quote-total">Total estimado: <strong id="quote-total">${money(cotTotal({conceptos:concepts}))}</strong></div></div>
   <label class="full-row">Notas / condiciones<textarea name="notas" placeholder="Condiciones, tiempo estimado, aclaraciones...">${esc(item?.notas||"")}</textarea></label>
   <div class="form-actions full-row"><button type="button" class="btn-secondary" data-close-modal>Cancelar</button><button class="btn-primary">Guardar cotización</button></div></form>`;
 }
 if(type==="pago"){
 const available=data.servicios.filter(s=>saldoServicio(s)>0);
 html=`<span class="eyebrow">Movimiento financiero</span><h2>Registrar pago</h2><form id="modal-form" class="form-grid"><label class="full-row">Orden<select name="servicioId" id="pay-service" required><option value="">Selecciona una orden</option>${available.map(s=>`<option value="${s.id}">${esc(s.folio)} · ${esc(s.cliente)} · Saldo ${money(saldoServicio(s))}</option>`).join("")}</select></label><label>Fecha<input name="fecha" type="date" required value="${today}"></label><label>Importe<input name="importe" id="pay-amount" type="number" min=".01" step=".01" required></label><label>Método<select name="metodo"><option>Efectivo</option><option>Transferencia</option><option>Tarjeta</option><option>Otro</option></select></label><label>Concepto<select name="concepto"><option>Abono</option><option>Anticipo</option><option>Liquidación</option></select></label><label class="full-row">Nota<textarea name="nota"></textarea></label><div id="payment-balance-info" class="payment-balance full-row">Selecciona una orden para consultar su saldo.</div><div class="form-actions full-row"><button type="button" class="btn-secondary" data-close-modal>Cancelar</button><button class="btn-primary">Registrar pago</button></div></form>`;
 }
 if(type==="inventario")html=`<span class="eyebrow">Almacén</span><h2>${item?"Editar":"Nuevo"} producto</h2><form id="modal-form" class="form-grid"><label>Producto<input name="producto" required value="${esc(item?.producto||"")}"></label><label>Categoría<input name="categoria" required value="${esc(item?.categoria||"")}"></label><label>Existencia<input name="existencia" type="number" min="0" step=".01" required value="${item?.existencia??0}"></label><label>Existencia mínima<input name="minimo" type="number" min="0" step=".01" required value="${item?.minimo??0}"></label><label>Unidad<input name="unidad" required placeholder="L, kg, pzas, rollos..." value="${esc(item?.unidad||"")}"></label><label>Proveedor<input name="proveedor" value="${esc(item?.proveedor||"")}"></label><div class="form-actions full-row"><button type="button" class="btn-secondary" data-close-modal>Cancelar</button><button class="btn-primary">Guardar producto</button></div></form>`;
 c.innerHTML=html;
 if(type==="servicio"){c.querySelector('[name="tipo"]').value=item?.tipo||"Hojalatería";c.querySelector('[name="estado"]').value=item?.estado||"Recibido"}
 if(type==="cotizacion"){
   c.querySelector('[name="estado"]').value=item?.estado||"Pendiente";
   const list=c.querySelector("#concept-list");
   const recalc=()=>{const cs=[...list.querySelectorAll(".concept-row")].map(r=>({cantidad:Number(r.querySelector(".ccant").value)||0,precio:Number(r.querySelector(".cprecio").value)||0}));c.querySelector("#quote-total").textContent=money(cotTotal({conceptos:cs}))};
   c.querySelector("#add-concept").addEventListener("click",()=>{list.insertAdjacentHTML("beforeend",conceptRow({descripcion:"",cantidad:1,precio:0},Date.now()));wireConcepts();recalc()});
   function wireConcepts(){list.querySelectorAll(".concept-row").forEach(r=>{r.querySelectorAll("input").forEach(i=>i.oninput=recalc);const b=r.querySelector(".remove-concept");if(b)b.onclick=()=>{if(list.children.length>1){r.remove();recalc()}}})}
   wireConcepts();
 }

 document.getElementById("modal").classList.add("open");document.getElementById("modal").setAttribute("aria-hidden","false");
 c.querySelectorAll("[data-close-modal]").forEach(b=>b.addEventListener("click",closeModal));
 c.querySelector("#modal-form").addEventListener("submit",e=>saveModal(e,type,item?.id));
}

function closeModal(){document.getElementById("modal").classList.remove("open");document.getElementById("modal").setAttribute("aria-hidden","true")}

function saveModal(e,type,id){
 e.preventDefault();const obj=Object.fromEntries(new FormData(e.target).entries());
 const key=type==="cliente"?"clientes":type==="vehiculo"?"vehiculos":type==="servicio"?"servicios":type==="cotizacion"?"cotizaciones":type==="pago"?"pagos":"inventario";
 if(type==="inventario"){obj.existencia=Number(obj.existencia);obj.minimo=Number(obj.minimo)}
 if(type==="servicio"){obj.total=Number(obj.total);obj.anticipo=Number(obj.anticipo)}
 if(type==="pago"){obj.servicioId=Number(obj.servicioId);obj.importe=Number(obj.importe);const s=data.servicios.find(x=>Number(x.id)===obj.servicioId),bal=s?saldoServicio(s):0;if(!s||obj.importe<=0||obj.importe>bal+.001){alert("El importe no puede superar el saldo pendiente.");return}}
 if(type==="cotizacion"){obj.conceptos=[...e.target.querySelectorAll(".concept-row")].map(r=>({descripcion:r.querySelector(".cdesc").value.trim(),cantidad:Number(r.querySelector(".ccant").value)||1,precio:Number(r.querySelector(".cprecio").value)||0}));}
 if(id){const i=data[key].findIndex(x=>x.id===id);data[key][i]={...data[key][i],...obj}}else{obj.id=Date.now();data[key].push(obj)}
 save();closeModal();renderAll();toast("Información guardada correctamente.");
}

window.editItem=(type,id)=>{const key=type==="cliente"?"clientes":type==="vehiculo"?"vehiculos":type==="servicio"?"servicios":type==="cotizacion"?"cotizaciones":"inventario";openModal(type,data[key].find(x=>x.id===id))};
window.deleteItem=(key,id)=>{if(confirm("¿Deseas eliminar este registro?")){data[key]=data[key].filter(x=>x.id!==id);save();renderAll();toast("Registro eliminado.")}};

window.printOrder=(id)=>{
 const x=data.servicios.find(s=>s.id===id); if(!x)return;
 const saldo=Math.max(0,Number(x.total||0)-Number(x.anticipo||0));
 const cliente=data.clientes.find(c=>c.nombre===x.cliente);
 const veh=data.vehiculos.find(v=>`${v.marca} ${v.modelo}`===x.vehiculo);
 const w=window.open("","_blank","width=900,height=800");
 w.document.write(`<!doctype html><html><head><meta charset="utf-8"><title>${esc(x.folio)}</title><style>
 body{font-family:Arial,sans-serif;color:#182533;margin:38px}h1{color:#0b5ea8;margin-bottom:4px}.head{border-bottom:3px solid #0b5ea8;padding-bottom:16px;margin-bottom:24px}.grid{display:grid;grid-template-columns:1fr 1fr;gap:10px 30px}.box{border:1px solid #dce4ea;border-radius:10px;padding:14px;margin-top:18px}.label{font-size:11px;text-transform:uppercase;color:#6d7a86;font-weight:bold}.value{font-size:15px;margin-top:4px}.totals{margin-left:auto;width:320px}.row{display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid #e7ebee}.saldo{font-size:18px;font-weight:bold}.footer{margin-top:45px;font-size:11px;color:#6d7a86}.sign{display:grid;grid-template-columns:1fr 1fr;gap:70px;margin-top:70px}.line{border-top:1px solid #333;text-align:center;padding-top:7px;font-size:12px}@media print{button{display:none}}
 </style></head><body>
 <div class="head"><h1>Servicios Especiales de Hojalatería y Pintura</h1><div>Orden de servicio <b>${esc(x.folio)}</b></div></div>
 <div class="grid">
 <div><div class="label">Cliente</div><div class="value">${esc(x.cliente)}</div></div>
 <div><div class="label">Teléfono</div><div class="value">${esc(cliente?.telefono||"—")}</div></div>
 <div><div class="label">Vehículo</div><div class="value">${esc(x.vehiculo)}</div></div>
 <div><div class="label">Placas</div><div class="value">${esc(veh?.placas||"—")}</div></div>
 <div><div class="label">Fecha de entrada</div><div class="value">${fmtDate(x.entrada)}</div></div>
 <div><div class="label">Entrega estimada</div><div class="value">${fmtDate(x.entrega)}</div></div>
 <div><div class="label">Servicio</div><div class="value">${esc(x.tipo)}</div></div>
 <div><div class="label">Estado</div><div class="value">${esc(x.estado)}</div></div>
 </div>
 <div class="box"><div class="label">Trabajo autorizado</div><p>${esc(x.detalle||"—")}</p></div>
 <div class="box"><div class="label">Observaciones / recepción</div><p>${esc(x.observaciones||"—")}</p></div>
 <div class="totals"><div class="row"><span>Total</span><b>${money(x.total)}</b></div><div class="row"><span>Anticipo</span><b>${money(x.anticipo)}</b></div><div class="row saldo"><span>Saldo</span><span>${money(saldo)}</span></div></div>
 <div class="sign"><div class="line">Firma del cliente</div><div class="line">Responsable del taller</div></div>
 <div class="footer">Av. Solidaridad las Torres 100, Álvaro Obregón, 52105 San Mateo Atenco, Méx. · WhatsApp: 229 851 9063</div>
 <script>window.onload=()=>window.print()<\/script></body></html>`);
 w.document.close();
};


window.quickPay=(id)=>{openModal("pago");const s=document.querySelector("#pay-service");if(s){s.value=String(id);s.dispatchEvent(new Event("change"))}};
window.deletePayment=(id)=>{if(confirm("¿Eliminar este pago?")){data.pagos=(data.pagos||[]).filter(p=>p.id!==id);save();renderAll();toast("Pago eliminado.")}};
window.printPaymentStatement=(id)=>{const s=data.servicios.find(x=>x.id===id);if(!s)return;const ps=pagosServicio(id),paid=totalPagadoServicio(s),sal=saldoServicio(s),rows=ps.map(p=>`<tr><td>${fmtDate(p.fecha)}</td><td>${esc(p.concepto)}</td><td>${esc(p.metodo)}</td><td>${money(p.importe)}</td></tr>`).join("");const w=window.open("","_blank","width=900,height=800");w.document.write(`<!doctype html><html><head><meta charset="utf-8"><title>${esc(s.folio)}</title><style>body{font-family:Arial;margin:38px;color:#182533}h1{color:#0b5ea8}table{width:100%;border-collapse:collapse;margin-top:25px}th,td{padding:11px;border-bottom:1px solid #ddd;text-align:left}.tot{margin:25px 0 0 auto;width:330px}.r{display:flex;justify-content:space-between;padding:9px;border-bottom:1px solid #ddd}</style></head><body><h1>Servicios Especiales de Hojalatería y Pintura</h1><h2>Estado de cuenta · ${esc(s.folio)}</h2><p><b>Cliente:</b> ${esc(s.cliente)} &nbsp; <b>Vehículo:</b> ${esc(s.vehiculo)}</p><table><tr><th>Fecha</th><th>Concepto</th><th>Método</th><th>Importe</th></tr>${rows}</table><div class="tot"><div class="r"><span>Total</span><b>${money(s.total)}</b></div><div class="r"><span>Pagado</span><b>${money(paid)}</b></div><div class="r"><span>Saldo</span><b>${money(sal)}</b></div></div><script>window.onload=()=>window.print()<\/script></body></html>`);w.document.close()};

window.convertQuote=(id)=>{
 const q=(data.cotizaciones||[]).find(x=>x.id===id);if(!q)return;
 if(!confirm(`¿Convertir ${q.folio} en una orden de servicio?`))return;
 const next="OS-"+String(Math.max(0,...data.servicios.map(x=>Number(String(x.folio).replace(/\D/g,""))||0))+1).padStart(4,"0");
 data.servicios.push({id:Date.now(),folio:next,cliente:q.cliente,vehiculo:q.vehiculo,tipo:"Otro",entrada:new Date().toISOString().slice(0,10),entrega:"",total:cotTotal(q),anticipo:0,estado:"Recibido",detalle:(q.conceptos||[]).map(c=>`${c.cantidad} x ${c.descripcion}`).join("; "),observaciones:`Generada desde ${q.folio}. ${q.notas||""}`,fotos:""});
 q.estado="Convertida";save();renderAll();toast(`${q.folio} convertida en ${next}.`);
};

window.printQuote=(id)=>{
 const q=(data.cotizaciones||[]).find(x=>x.id===id);if(!q)return;
 const cliente=data.clientes.find(c=>c.nombre===q.cliente),veh=data.vehiculos.find(v=>`${v.marca} ${v.modelo}`===q.vehiculo),total=cotTotal(q);
 const rows=(q.conceptos||[]).map(c=>`<tr><td>${esc(c.descripcion)}</td><td>${c.cantidad}</td><td>${money(c.precio)}</td><td>${money(Number(c.cantidad)*Number(c.precio))}</td></tr>`).join("");
 const w=window.open("","_blank","width=900,height=800");
 w.document.write(`<!doctype html><html><head><meta charset="utf-8"><title>${esc(q.folio)}</title><style>body{font-family:Arial,sans-serif;color:#182533;margin:38px}.head{border-bottom:3px solid #0b5ea8;padding-bottom:16px;margin-bottom:24px}h1{color:#0b5ea8;margin:0 0 5px}.meta{display:grid;grid-template-columns:1fr 1fr;gap:12px 30px;margin:20px 0}.label{font-size:11px;text-transform:uppercase;color:#6d7a86;font-weight:bold}.value{margin-top:4px}table{width:100%;border-collapse:collapse;margin-top:25px}th,td{padding:11px;border-bottom:1px solid #dfe5ea;text-align:left}th{background:#f4f7f9}.total{text-align:right;font-size:20px;margin-top:20px}.notes{border:1px solid #dfe5ea;padding:14px;border-radius:9px;margin-top:25px}.footer{font-size:11px;color:#6d7a86;margin-top:45px}@media print{button{display:none}}</style></head><body><div class="head"><h1>Servicios Especiales de Hojalatería y Pintura</h1><b>Cotización ${esc(q.folio)}</b></div><div class="meta"><div><div class="label">Cliente</div><div class="value">${esc(q.cliente)}</div></div><div><div class="label">Teléfono</div><div class="value">${esc(cliente?.telefono||"—")}</div></div><div><div class="label">Vehículo</div><div class="value">${esc(q.vehiculo)} ${veh?.placas?`· ${esc(veh.placas)}`:""}</div></div><div><div class="label">Fecha / vigencia</div><div class="value">${fmtDate(q.fecha)} · ${esc(q.validez)} días</div></div></div><table><thead><tr><th>Concepto</th><th>Cant.</th><th>P. unitario</th><th>Importe</th></tr></thead><tbody>${rows}</tbody></table><div class="total">Total estimado: <b>${money(total)}</b></div><div class="notes"><b>Notas y condiciones</b><p>${esc(q.notas||"Sin observaciones adicionales.")}</p></div><div class="footer">Av. Solidaridad las Torres 100, Álvaro Obregón, 52105 San Mateo Atenco, Méx. · WhatsApp: 229 851 9063<br>Esta cotización es informativa y puede ajustarse si durante el desmontaje se identifican daños no visibles.</div><script>window.onload=()=>window.print()<\/script></body></html>`);
 w.document.close();
};

function exportData(){
 const blob=new Blob([JSON.stringify(data,null,2)],{type:"application/json"}),a=document.createElement("a");
 a.href=URL.createObjectURL(blob);a.download="respaldo-servicios-especiales.json";a.click();URL.revokeObjectURL(a.href);toast("Respaldo generado.");
}
