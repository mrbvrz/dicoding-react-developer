import React from "react";
import autoBind from "auto-bind";
import { confirmAlert, getInitialData, notificationAlert } from "../utils";
import { FiArchive, FiPlusCircle, FiList } from "react-icons/fi";
import "../assets/styles/style.css";

import CatatanAdd from "./CatatanAdd";
import CatatanHeader from "./CatatanHeader";
import CatatanSectionTitle from "./CatatanSectionTitle";
import CatatanList from "./CatatanList";
import CatatanFooter from "./CatatanFooter";

export default class CatatanApp extends React.Component {
  constructor(props) {
    super(props);

    const catatans = getInitialData();
    this.state = {
      catatans,
      searchCatatans: catatans,
      keyword: "",
    };

    autoBind(this);
  }

  onAddCatatanEventHandler({ title, body }) {
    const catatans = {
      id: +new Date(),
      title,
      body,
      createdAt: new Date().toISOString(),
      archived: false,
    };
    this.setState((previousState) => ({
      catatans: [catatans, ...previousState.searchCatatans],
      searchCatatans: [catatans, ...previousState.searchCatatans],
    }));

    notificationAlert("Ditambahkan!", "Catatan anda telah ditambahkan!.");
  }

  onMoveCatatanEventHandler(id) {
    confirmAlert(
      "Anda yakin memindahkan catatan?",
      "Catatan yang dipindahkan nantinya dapat dilihat pada daftar catatan!",
      "Ya, Pindahkan"
    ).then((result) => {
      if (result.isConfirmed) {
        this.setState((previousState) => {
          const catatanIndex = previousState.searchCatatans.findIndex((catatan) => catatan.id === id);
          const catatan = previousState.searchCatatans.find((catatan) => catatan.id === id);
          catatan.archived = false;

          previousState.catatans[catatanIndex] = catatan;

          return {
            catatans: previousState.searchCatatans,
            searchCatatans: previousState.searchCatatans,
          };
        });

        notificationAlert(
          "Dipindahkan!",
          "Catatan anda berhasil dipindahkan kedalam daftar catatan."
        );
      }
    });
  }

  onArchiveCatatanEventHandler(id) {
    confirmAlert(
      "Arsipkan catatan?",
      "Pindahkan catatan kedalam arsip!",
      "Ya, arsipkan!"
    ).then((result) => {
      if (result.isConfirmed) {
        this.setState((previousState) => {
          const catatanIndex = previousState.searchCatatans.findIndex(
            (catatan) => catatan.id === id
          );
          const catatan = previousState.searchCatatans.find((catatan) => catatan.id === id);
          catatan.archived = true;

          previousState.searchCatatans[catatanIndex] = catatan;

          return {
            catatans: previousState.searchCatatans,
            searchCatatans: previousState.searchCatatans,
          };
        });

        notificationAlert("Terarsip!", "Catatan anda telah diarsipkan.");
      }
    });
  }

  onDeleteCatatanEventHandler(id) {
    confirmAlert(
      "Yakin ingin menghapus?",
      "Anda tidak dapat mengembalikan catatan yang telah dihapus!",
      "Ya, Hapus catatan"
    ).then((result) => {
      if (result.isConfirmed) {
        this.setState((previousState) => {
          const catatans = previousState.searchCatatans.filter(
            (catatan) => catatan.id !== id
          );

          return {
            catatans,
            searchCatatans: catatans,
          };
        });

        notificationAlert("Dihapus!", "Catatan anda berhasil dihapus.");
      }
    });
  }

  onChangeSearchCatatanEventHandler(e) {
    const keyword = e.target.value.toLowerCase();

    if (keyword.length === 0 || keyword === "") {
      this.setState((previousState) => ({
        keyword,
        catatans: previousState.searchCatatans,
      }));
    } else {
      this.setState((previousState) => ({
        keyword,
        catatans: previousState.searchCatatans.filter((catatan) =>
          catatan.title.toLowerCase().includes(keyword)),
      }));
    }
  }

  render() {
    const catatans = this.state.catatans;
    const keyword = this.state.keyword;

    const listCatatans = catatans.filter((catatan) =>
        catatan.title.toLowerCase().includes(keyword.toLocaleLowerCase()) && !catatan.archived
    );

    const archiveCatatans = catatans.filter((catatan) =>
        catatan.title.toLowerCase().includes(keyword.toLocaleLowerCase()) && catatan.archived
    );

    return (
      <div className="swal2-blur">
        <CatatanHeader searchCatatan={this.onChangeSearchCatatanEventHandler} />
        <div className="catatan-container">
          <CatatanSectionTitle
            title="Buat Catatan"
            icon={<FiPlusCircle />}
            desc="🚀 tambahkan catatan untuk memudahkan anda menyimpan setiap infomasi penting anda"
          />
          <CatatanAdd addNote={this.onAddCatatanEventHandler} />
          <CatatanSectionTitle
            title="Daftar Catatan"
            icon={<FiList />}
            desc="🔥 create and manage organized lists of notes seamlessly"
          />
          <CatatanList
            type="list"
            notes={listCatatans}
            deleteNote={this.onDeleteCatatanEventHandler}
            moveNote={this.onMoveCatatanEventHandler}
            archiveNote={this.onArchiveCatatanEventHandler}
          />
          <CatatanSectionTitle
            title="Arsip"
            icon={<FiArchive />}
            desc="🎉 arsipkan catatan lampau anda yang dirasa masih penting dan relevan"
          />
          <CatatanList
            type="archive"
            notes={archiveCatatans}
            deleteNote={this.onDeleteCatatanEventHandler}
            moveNote={this.onMoveCatatanEventHandler}
            archiveNote={this.onArchiveCatatanEventHandler}
          />
          <CatatanFooter />
        </div>
      </div>
    );
  }
}
