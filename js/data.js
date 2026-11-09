// Data gambar, proyek, dan sertifikat. Ubah di sini untuk menambah konten.
const IMG={
 "Foto profil": "images/profil/foto-profil.jpg",
 "Project 1": "images/webgis/laundry-sleman.jpg",
 "Project 2": "images/webgis/jalan-bantul.jpg",
 "project 11": "images/webgis/urban-heat-island.jpg",
 "WEBGIS DELI SERDANG": "images/webgis/deli-serdang.jpg",
 "WEBGIS KERINCI": "images/webgis/kerinci.jpg",
 "STORYMAP": "images/webgis/storymap-jateng.jpg",
 "image1-ndvi-muara-lahat": "images/penginderaan-jauh/ndvi-muara-lahat.jpg",
 "project 12": "images/penginderaan-jauh/mangrove-snap.jpg",
 "image-preview-msib": "images/pemetaan/peta-dasar-rdtr.jpg",
 "plugin_mapflow": "images/pemetaan/plugin-mapflow.jpg",
 "foto youtube": "images/konten/tutorial-qgis-3d.jpg",
 "Project 3": "images/konten/konten-edukasi-gis.jpg",
 "BNSP-emeralda": "images/sertifikat/bnsp.jpg",
 "sertifikat-msib-inspiring": "images/sertifikat/msib.jpg",
 "Sertifikat Pelatihan bootcamp for mining 15 - 17 agustus 2024": "images/sertifikat/arcgis-mining.jpg",
 "sertifikat-pelatihanArcGIS-SKL": "images/sertifikat/arcgis-skl.jpg"
};
const P=[
["Peta Laundry Sleman","Peta interaktif sebaran laundry self-service di Kabupaten Sleman.","Project 1",["HTML","JavaScript","Leaflet"],"webgis","https://emeralda1221.github.io/WebGIS-Peta-Persebaran-Laundry-Self-Service","Buka proyek"],
["Jaringan Jalan Kabupaten Bantul","Data jaringan jalan diekspor dari Overpass Turbo dalam format JSON, lalu divisualisasikan di aplikasi WebGIS.","Project 2",["HTML","JavaScript","Leaflet"],"webgis","https://emeralda1221.github.io/WebGIS_Kabupaten_Bantul/","Buka proyek"],
["Urban Heat Island","WebGIS hasil analisis Urban Heat Island untuk memahami pola sebaran suhu di perkotaan.","project 11",["GEE","Penginderaan jauh","WebGIS"],"webgis remote","https://emeralda1221.github.io/webgis-uhi/","Buka proyek"],
["Peta Administrasi Deli Serdang","Batas dan informasi administrasi Kabupaten Deli Serdang. Data diolah di QGIS, lalu dipublikasikan sebagai peta web.","WEBGIS DELI SERDANG",["QGIS","WebGIS","VS Code"],"webgis","https://emeralda1221.github.io/peta-administrasi-deliaserdang/","Buka proyek"],
["WebGIS Kabupaten Kerinci","Peta interaktif wilayah administrasi Kabupaten Kerinci. Pengguna bisa menjelajahi peta dan melihat batas wilayah.","WEBGIS KERINCI",["QGIS","WebGIS"],"webgis","https://emeralda1221.github.io/kerinci-adm/","Buka proyek"],
["Story Map Wisata Jawa Tengah","Story map interaktif tentang destinasi wisata di Jawa Tengah.","STORYMAP",["WebGIS","Story map"],"webgis","https://emeralda1221.github.io/Tourism-of-Central-Java/","Buka proyek"],
["Peta NDVI Muara Lahat","Peta indeks vegetasi (NDVI) untuk menggambarkan kerapatan dan kondisi vegetasi di Muara Lahat.","image1-ndvi-muara-lahat",["GEE","ArcGIS","NDVI"],"remote","",""],
["Analisis Mangrove dengan SNAP","Pemetaan kawasan mangrove dari citra satelit untuk melihat sebaran dan kondisi vegetasinya.","project 12",["SNAP","Analisis spasial"],"remote","",""],
["Peta Dasar RDTR","Pembuatan peta dasar untuk mendukung penyusunan rencana detail tata ruang.","image-preview-msib",["Digitasi","ArcGIS","RDTR"],"peta","https://drive.google.com/drive/folders/1Wi6Jzgd9Qg5tPqv9tLbdIR1RuYUVnUa-?usp=sharing","Lihat di Google Drive"],
["Menjajal plugin MapFlow","Eksplorasi plugin MapFlow untuk mengolah dan memvisualisasikan data spasial.","plugin_mapflow",["QGIS","Plugin"],"peta","",""],
["Tutorial plugin 3D QGIS","Tutorial visualisasi data spasial 3D dengan plugin QGIS.","foto youtube",["QGIS","Konten"],"konten","https://youtu.be/Hbt_z93nKBk?si=fJdwLpiqFY9EpjMO","Tonton di YouTube"],
["Konten edukasi GIS","Konten seputar GIS, WebGIS, dan teknologi geospasial yang saya bagikan di media sosial.","Project 3",["GIS","Konten"],"konten","https://vt.tiktok.com/ZS9kvL19aUgnf-DxtsQ/","Lihat di TikTok"]];
const L={webgis:"WebGIS",remote:"Penginderaan jauh",peta:"Pemetaan dan tata ruang",konten:"Konten edukasi"};
const C=[["Sertifikasi Kompetensi BNSP","Teknisi Penginderaan Jauh","BNSP-emeralda","November 2024, berlaku sampai November 2027"],
["Magang dan Studi Independen (MSIB)","DPUPR Kabupaten Pekalongan, bersama Tim Penyusunan RDTR","sertifikat-msib-inspiring","Februari sampai Juli 2024"],
["Bootcamp ArcGIS Pro for Mining","Pengolahan dan analisis data spasial untuk pertambangan","Sertifikat Pelatihan bootcamp for mining 15 - 17 agustus 2024","15 sampai 17 Agustus 2024"],
["Pelatihan Satuan Kesesuaian Lahan","Pengolahan dan analisis SKL dengan ArcGIS","sertifikat-pelatihanArcGIS-SKL","28 April 2024"]];
