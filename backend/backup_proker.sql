--
-- PostgreSQL database dump
--

\restrict W0wsYUwBd1u4ATJIGnH1EAtjeKccLCpggGxnjdlwEyBWMq1EKDbubs0eaIKWf2M

-- Dumped from database version 16.13
-- Dumped by pg_dump version 16.13

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Member; Type: TABLE; Schema: public; Owner: hmti_ump
--

CREATE TABLE public."Member" (
    id integer NOT NULL,
    name text NOT NULL,
    role text NOT NULL,
    department text NOT NULL,
    "imageUrl" text NOT NULL,
    instagram text,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);


ALTER TABLE public."Member" OWNER TO hmti_ump;

--
-- Name: Member_id_seq; Type: SEQUENCE; Schema: public; Owner: hmti_ump
--

CREATE SEQUENCE public."Member_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Member_id_seq" OWNER TO hmti_ump;

--
-- Name: Member_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: hmti_ump
--

ALTER SEQUENCE public."Member_id_seq" OWNED BY public."Member".id;


--
-- Name: Mentor; Type: TABLE; Schema: public; Owner: hmti_ump
--

CREATE TABLE public."Mentor" (
    id integer NOT NULL,
    name text NOT NULL,
    role text NOT NULL,
    "imageUrl" text NOT NULL,
    instagram text NOT NULL,
    github text NOT NULL,
    linkedin text NOT NULL
);


ALTER TABLE public."Mentor" OWNER TO hmti_ump;

--
-- Name: Mentor_id_seq; Type: SEQUENCE; Schema: public; Owner: hmti_ump
--

CREATE SEQUENCE public."Mentor_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Mentor_id_seq" OWNER TO hmti_ump;

--
-- Name: Mentor_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: hmti_ump
--

ALTER SEQUENCE public."Mentor_id_seq" OWNED BY public."Mentor".id;


--
-- Name: Proker; Type: TABLE; Schema: public; Owner: hmti_ump
--

CREATE TABLE public."Proker" (
    id integer NOT NULL,
    dept text NOT NULL,
    title text NOT NULL,
    "desc" text NOT NULL,
    img text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public."Proker" OWNER TO hmti_ump;

--
-- Name: Proker_id_seq; Type: SEQUENCE; Schema: public; Owner: hmti_ump
--

CREATE SEQUENCE public."Proker_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Proker_id_seq" OWNER TO hmti_ump;

--
-- Name: Proker_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: hmti_ump
--

ALTER SEQUENCE public."Proker_id_seq" OWNED BY public."Proker".id;


--
-- Name: _prisma_migrations; Type: TABLE; Schema: public; Owner: hmti_ump
--

CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);


ALTER TABLE public._prisma_migrations OWNER TO hmti_ump;

--
-- Name: Member id; Type: DEFAULT; Schema: public; Owner: hmti_ump
--

ALTER TABLE ONLY public."Member" ALTER COLUMN id SET DEFAULT nextval('public."Member_id_seq"'::regclass);


--
-- Name: Mentor id; Type: DEFAULT; Schema: public; Owner: hmti_ump
--

ALTER TABLE ONLY public."Mentor" ALTER COLUMN id SET DEFAULT nextval('public."Mentor_id_seq"'::regclass);


--
-- Name: Proker id; Type: DEFAULT; Schema: public; Owner: hmti_ump
--

ALTER TABLE ONLY public."Proker" ALTER COLUMN id SET DEFAULT nextval('public."Proker_id_seq"'::regclass);


--
-- Data for Name: Member; Type: TABLE DATA; Schema: public; Owner: hmti_ump
--

COPY public."Member" (id, name, role, department, "imageUrl", instagram, "createdAt", "updatedAt") FROM stdin;
\.


--
-- Data for Name: Mentor; Type: TABLE DATA; Schema: public; Owner: hmti_ump
--

COPY public."Mentor" (id, name, role, "imageUrl", instagram, github, linkedin) FROM stdin;
1	nopal	web dev				
\.


--
-- Data for Name: Proker; Type: TABLE DATA; Schema: public; Owner: hmti_ump
--

COPY public."Proker" (id, dept, title, "desc", img, "createdAt") FROM stdin;
40	EKRAF	PDH KORSA	PDH Korsa adalah program kerja yang bertujuan sebagai langkah untuk mempersatukan seluruh mahasiswa Teknik Informatika dalam identitas bersama serta membangun solidaritas yang kokoh tanpa membedakan antar angkatan. Sistem Pre-Order dan akan diadakan 1x dalam 1 periode		2026-05-25 11:30:18.434
41	EKRAF	MERCHANDISE	Merchandise merupakan program yang bertujuan untuk menjadi salah satu upaya dalam memperoleh pemasukan tambahan di luar sumber pendanaan lainnya, sekaligus sebagai sarana untuk memperkenalkan HMTI secara lebih luas. Jenis merchandise yang akan dipasarkan, antara lain: Kaos Gantungan Kunci Stiker Sistem pembelian merchandise dilakukan dengan metode Pre-Order, sehingga dapat menyesuaikan minat serta jumlah peminat.		2026-05-25 11:31:16.558
42	EKRAF	MANAJEMEN AKUN PEMASARAN dan BRANDING EKRAF	Salah satu tugas utama adalah mengelola dan mempromosikan brand ZenovaIT sebagai simbol inovasi di bidang informasi dan identitas produk ekonomi kreatif teknologi. Pengelolaan pemasaran dan branding dilakukan oleh Departemen Ekraf bersama Kominfo melalui media sosial dan platform digital, agar promosi berjalan konsisten, terarah, dan efektif.		2026-05-25 11:32:37.334
30	RISTEK	STUDY CLUB	Sebagai wadah pengembangan diri mahasiswa baik dari segi softskill maupun hardskill dan mengikuti berbagai IT competition.		2026-05-25 11:19:27.343
31	RISTEK	NITRO	National Information Technology Roll Out (NITRO) adalah kegiatan yang berfokus pada pengembangan kompetensi, kreativitas, dan inovasi di bidang teknologi informasi melalui kompetisi dan aktivitas edukatif		2026-05-25 11:19:46.241
37	PSDM	IT SPORT	Perlombaan non-akademik untuk internal prodi teknik informatika	https://res.cloudinary.com/di9ls9t2u/image/upload/v1779711227/itsport_ffjgqo.jpg	2026-05-25 11:27:08.793
43	EKRAF	WAROENG EKRAF	Waroeng Ekraf adalah program penjualan makanan yang dijalankan bersama sebagai proyek bisnis terstruktur. Selain menghasilkan pemasukan untuk mendukung agenda himpunan, program ini juga menjadi wadah mahasiswa mengembangkan keterampilan entrepreneurship. Kegiatan dilaksanakan secara online/offline, dengan beragam pilihan makanan yang sekaligus berkontribusi pada keberlangsungan organisasi.		2026-05-25 11:44:15.752
11	BPH	JAHIM	Jaket Himpunan adalah pakaian identitas anggota hmps ti ump	-	2026-04-03 13:23:32.805
1	BPH	PELANTIKAN PENGURUS	Pelantikan Pengurus adalah program kerja yang bertujuan untuk mengesahkan dan mengukuhkan kepengurusan baru Himpunan Mahasiswa Teknik Informatika. Kegiatan ini menjadi awal resmi bagi pengurus HMTI dalam menjalankan tugas selama satu periode.		2026-04-03 11:24:17.019
28	BPH	Makrab Pengurus	Makrab Pengurus adalah kegiatan keakraban yang ditujukan khusus bagi seluruh pengurus organisasi untuk mempererat hubungan, meningkatkan rasa kebersamaan, serta membangun kekompakan tim. 		2026-05-25 11:15:53.809
29	BPH	Foto Studio	Foto Studio merupakan kegiatan pengambilan foto formal anggota himpunan yang dilakukan secara seragam dan terkonsep.		2026-05-25 11:18:26.148
33	HUMAS	STUDI BANDING	Program kerja studi banding merupakan kegiatan kunjungan dan pertukaran informasi antar organisasi, instansi, atau lembaga untuk mempelajari sistem kerja, program unggulan, serta pengalaman yang dimiliki pihak lain. Kegiatan ini bertujuan untuk menambah wawasan, meningkatkan kualitas organisasi, mempererat relasi, serta memperoleh referensi dalam pengembangan program dan manajemen organisasi agar menjadi lebih efektif dan inovatif.		2026-05-25 11:21:21.738
34	HUMAS	BAKTI SOSIAL	Program kerja bakti sosial merupakan kegiatan kepedulian sosial yang dilakukan untuk membantu masyarakat yang membutuhkan melalui pemberian bantuan, pelayanan, maupun kegiatan sosial lainnya. Kegiatan ini bertujuan untuk menumbuhkan rasa empati, solidaritas, dan jiwa gotong royong, serta mempererat hubungan antara organisasi dengan masyarakat sekitar.		2026-05-25 11:23:02.949
35	HUMAS	SAFARI HIMPUNAN	Safari Himpunan adalah program kerja mirip dengan studi banding tetapi lebih non formal atau kegiatan safari, dengan dua himpunan atau lebih untuk sharing santai dan tidak terikat rd dll.		2026-05-25 11:24:03.135
44	KOMINFO	Pengelolaan IG HMTI	Pengelolaan Instagram menjadi salah satu program kerja utama Departemen Kominfo, karena platform ini berperan sebagai media publikasi utama yang menjangkau mahasiswa, anggota organisasi, maupun masyarakat umum. Melalui akun Instagram HMTI, kami berfokus pada pembuatan konten yang informatif, kreatif, dan interaktif, yang dikemas dalam berbagai format seperti feed, reels, dan Instagram story.		2026-05-25 11:46:09.906
45	KOMINFO	MemeTIverse	MemeTIverse merupakan program kreatif dari Departemen Kominfo yang dirancang sebagai ruang hiburan sekaligus edukasi bagi mahasiswa, khususnya civitas akademika Teknik Informatika. Program ini memanfaatkan format meme sebagai media komunikasi yang santai, familiar, dan dekat dengan kehidupan mahasiswa masa kini. Konten MemeTIverse mengangkat berbagai topik yang relevan, seperti tren teknologi, kehidupan perkuliahan, tugas, coding, pengalaman praktikum, hingga dinamika organisasi, dan dikemas dengan pendekatan humor yang ringan namun tetap sopan dan kontekstual.		2026-05-25 11:47:00.763
46	KOMINFO	MedPart (Media Partner)	Program kerja Medpart merupakan salah satu inisiatif dari Departemen Kominfo HMTI yang bertujuan untuk membangun serta menjaga hubungan kerja sama yang strategis dengan pihak eksternal, baik promotor, organisasi, maupun instansi yang membutuhkan dukungan publikasi. Melalui program ini, Departemen Kominfo berperan sebagai jembatan komunikasi dalam memberikan dukungan media, seperti publikasi poster, informasi acara, maupun konten digital lainnya sesuai kebutuhan pihak yang bekerja sama.		2026-05-25 11:47:46.269
47	KOMINFO	Video Profile HMTI	Video Profile HMTI merupakan program kerja yang bertujuan untuk memperkenalkan identitas organisasi secara lebih visual, menarik, dan mudah dipahami oleh mahasiswa maupun pihak eksternal. Melalui video ini, HMTI menampilkan gambaran umum mengenai struktur organisasi, visi, misi, program kerja, serta berbagai aktivitas yang telah dan akan dilakukan selama satu periode.		2026-05-25 11:48:28.341
32	RISTEK	WEB HMTI	Web HMTI sebagai wadah informasi seputar Himpunan Mahasiswa Teknik Informatika		2026-05-25 11:19:56.135
48	KOMINFO	TI-Grad (Ucapan Wisuda)	TI-Grad merupakan program kerja yang berfokus pada pemberian ucapan selamat kepada mahasiswa Teknik Informatika yang telah resmi menyelesaikan studinya dan mencapai tahap wisuda. Program ini hadir sebagai bentuk penghargaan, dukungan, serta apresiasi dari HMTI kepada para wisudawan atas usaha, kerja keras, dan dedikasi mereka selama menjalani proses perkuliahan Pelaksanaan program ini mencakup penyusunan desain ucapan wisuda.		2026-05-25 11:49:07.782
49	KOMINFO	Dokuti (Dokumentasi & Publikasi	Dokuti merupakan program kerja yang berfokus pada proses dokumentasi dan publikasi seluruh kegiatan yang diselenggarakan oleh HMTI, baik dalam bentuk kegiatan internal maupun eksternal. Dokumentasi dilakukan melalui pengambilan foto maupun video dengan standar kualitas yang baik, sehingga setiap momen penting dalam kegiatan dapat terdokumentasi secara rapi, jelas, dan profesional.		2026-05-25 11:49:59.568
50	ADVO	LENTERA	Lentera adalah program kerja yang berfokus untuk memberikan informasi kepada para Mahasiswa dengan narasumber yang informatif dengan cara yang santai yang dikemas melalui video podcast.		2026-05-25 11:50:38.423
51	ADVO	KOTAK ASPIRASI	Kotak aspirasi adalah media yang menjadi sarana, wadah, atau jembatan untuk menampung saran saran dan aspirasi yang diberikan dari semua mahasiswa teknik informatika seperti saran dan harapan untuk prodi, dosen, himpunan, sarana dan prasarana, dll.		2026-05-25 11:51:11.719
52	ADVO	DISKUSI UMUM	Diskusi Umum merupakan program kerja departemen Advokasi yang bertujuan sebagai platform untuk mengkomodasi serta menfasilitasi aspirasi Mahasiswa yang sebelumnya sudah dikumpulkan melalui Kotak Aspirasi.		2026-05-25 11:51:49.766
53	ADVO	HAREDHA	Hari wajib berpdh adalah program kerja yang bertujuan untuk menguatkan kebersamaan antar mahasiswa TI FTS UMP.		2026-05-25 11:52:19.003
36	PSDM	Latihan dasar Organisasi 2025	Kegiatan Latihan Dasar Organisasi ini dirancang untuk memberikan pembekalan dasar kepada seluruh pengurus dan staff muda mengenai prinsip-prinsip organisasi, mekanisme persidangan, serta keterampilan berpikir kritis dan komunikasi aktif dalam forum.	https://res.cloudinary.com/di9ls9t2u/image/upload/v1779711155/ldo2_bbd8g3.jpg	2026-05-25 11:26:04.667
38	PSDM	PENGURUS MUDA	Merupakan wadah kaderisasi tingkat awal yang berfokus pada pembinaan,pengembangan potensi,serta penanaman nilai-nilai kepemimpinan,tanggung jawab dan solidaritas antar anggota	https://res.cloudinary.com/di9ls9t2u/image/upload/v1779711262/pengurusmuda_jwsikc.jpg	2026-05-25 11:28:01.279
39	PSDM	OSMA TI	OSMA TI ( Ospek dan Makrab Teknik Informatika )adalah Serangkaian kegiatan yang di selenggarakan untuk menyambut mahasiswa baru dan memperkenalkan Program Studi Teknik Informatika Kepada mahasiswa baru. Tujuan diadakannya acara ini adalah untuk memupuk rasa kebersamaan,memperkuat solidaritas diantara mahasiswa baru dan melakukan branding terkait Himpunan Mahasiswa Teknik Informatika (HMTI)	https://res.cloudinary.com/di9ls9t2u/image/upload/v1779711679/osma_s40yci.jpg	2026-05-25 11:29:04.104
\.


--
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: hmti_ump
--

COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
7256fa83-b079-436b-a2b0-7da809578cfc	4d6b304669e7555488e3fc978e7d50efdb54ac7fbd668ab74ceb2e664b1cbaf3	2026-04-03 09:50:28.333565+00	20260224153206_init	\N	\N	2026-04-03 09:50:28.309942+00	1
eb322458-3c1a-4726-9b92-45909d51a50f	97fc1d8cc791e8dca2b673c27f45911557bd60dc89dc3859302180404b0bbc84	2026-04-03 09:59:06.949981+00	20260403095906_add_post_model	\N	\N	2026-04-03 09:59:06.923153+00	1
70dbcc99-d0d8-48d3-ab7b-d708bc9bcf58	50ec023b8d95c215671b23494dfb303dc66b241f3c0f4be26d99385d9a2bc705	2026-04-03 13:36:45.377598+00	20260403133645_revisi	\N	\N	2026-04-03 13:36:45.355156+00	1
c8f8bc3a-9ead-4441-b22e-952143c8cde8	1f87cc33d5c2b725ed85f9eead6c221ae98980e587024ac9fb1531240dea881a	2026-05-25 14:28:06.886313+00	20260517232933_create_member_table	\N	\N	2026-05-25 14:28:06.825814+00	1
76895968-bdd4-4e43-9153-7b54aa3143f4	71f55d0f5862c57b56556c130742ca95b54eb2f6a1e2425a0441b45a7725683b	\N	auto_fix	A migration failed to apply. New migrations cannot be applied before the error is recovered from. Read more about how to resolve migration issues in a production database: https://pris.ly/d/migrate-resolve\n\nMigration name: auto_fix\n\nDatabase error code: none\n\nDatabase error:\nerror encoding message to server: string contains embedded null\n\n   0: sql_schema_connector::apply_migration::apply_script\n           with migration_name="auto_fix"\n             at schema-engine\\connectors\\sql-schema-connector\\src\\apply_migration.rs:113\n   1: schema_commands::commands::apply_migrations::Applying migration\n           with migration_name="auto_fix"\n             at schema-engine\\commands\\src\\commands\\apply_migrations.rs:95\n   2: schema_core::state::ApplyMigrations\n             at schema-engine\\core\\src\\state.rs:255	2026-05-25 14:39:53.923862+00	2026-05-25 14:28:06.888191+00	0
086660a8-f10a-455d-9a7d-572950131ad4	223700e17c7c362c86bf9214558aac0734b07a5152f2ecc1bb6e25d2aff87312	\N	auto_fix	A migration failed to apply. New migrations cannot be applied before the error is recovered from. Read more about how to resolve migration issues in a production database: https://pris.ly/d/migrate-resolve\n\nMigration name: auto_fix\n\nDatabase error code: 42P07\n\nDatabase error:\nERROR: relation "Aspirasi" already exists\n\nDbError { severity: "ERROR", parsed_severity: Some(Error), code: SqlState(E42P07), message: "relation \\"Aspirasi\\" already exists", detail: None, hint: None, position: None, where_: None, schema: None, table: None, column: None, datatype: None, constraint: None, file: Some("heap.c"), line: Some(1150), routine: Some("heap_create_with_catalog") }\n\n   0: sql_schema_connector::apply_migration::apply_script\n           with migration_name="auto_fix"\n             at schema-engine\\connectors\\sql-schema-connector\\src\\apply_migration.rs:113\n   1: schema_commands::commands::apply_migrations::Applying migration\n           with migration_name="auto_fix"\n             at schema-engine\\commands\\src\\commands\\apply_migrations.rs:95\n   2: schema_core::state::ApplyMigrations\n             at schema-engine\\core\\src\\state.rs:255	\N	2026-05-25 14:45:48.757114+00	0
\.


--
-- Name: Member_id_seq; Type: SEQUENCE SET; Schema: public; Owner: hmti_ump
--

SELECT pg_catalog.setval('public."Member_id_seq"', 1, false);


--
-- Name: Mentor_id_seq; Type: SEQUENCE SET; Schema: public; Owner: hmti_ump
--

SELECT pg_catalog.setval('public."Mentor_id_seq"', 1, true);


--
-- Name: Proker_id_seq; Type: SEQUENCE SET; Schema: public; Owner: hmti_ump
--

SELECT pg_catalog.setval('public."Proker_id_seq"', 54, true);


--
-- Name: Member Member_pkey; Type: CONSTRAINT; Schema: public; Owner: hmti_ump
--

ALTER TABLE ONLY public."Member"
    ADD CONSTRAINT "Member_pkey" PRIMARY KEY (id);


--
-- Name: Mentor Mentor_pkey; Type: CONSTRAINT; Schema: public; Owner: hmti_ump
--

ALTER TABLE ONLY public."Mentor"
    ADD CONSTRAINT "Mentor_pkey" PRIMARY KEY (id);


--
-- Name: Proker Proker_pkey; Type: CONSTRAINT; Schema: public; Owner: hmti_ump
--

ALTER TABLE ONLY public."Proker"
    ADD CONSTRAINT "Proker_pkey" PRIMARY KEY (id);


--
-- Name: _prisma_migrations _prisma_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: hmti_ump
--

ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

\unrestrict W0wsYUwBd1u4ATJIGnH1EAtjeKccLCpggGxnjdlwEyBWMq1EKDbubs0eaIKWf2M

