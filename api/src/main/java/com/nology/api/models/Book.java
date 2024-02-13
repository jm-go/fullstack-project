package com.nology.api.models;


import jakarta.persistence.*;

@Entity
@Table(name = "book")
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @ManyToOne
    @JoinColumn(name = "author_id", insertable = false, updatable = false)
    private Author author_id;

    @Column(name = "title")
    private String title;

    @Column(name = "description_short")
    private String descriptionShort;

    @Column(name = "description_long")
    private String descriptionLong;


    @Column(name = "genre")
    private String genre;

    @Column(name = "cover")
    private String cover;

    @Column(name = "is_favourite")
    private boolean isFavourite;

    public void setId(long id) {
        this.id = id;
    }

    public boolean isFavourite() {
        return isFavourite;
    }

    public void setFavourite(boolean favourite) {
        isFavourite = favourite;
    }

    public long getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Author getAuthor_id() {
        return author_id;
    }

    public void setAuthor_id(Author author_id) {
        this.author_id = author_id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescriptionShort() {
        return descriptionShort;
    }

    public void setDescriptionShort(String descriptionShort) {
        this.descriptionShort = descriptionShort;
    }

    public String getDescriptionLong() {
        return descriptionLong;
    }

    public void setDescriptionLong(String descriptionLong) {
        this.descriptionLong = descriptionLong;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public String getCover() {
        return cover;
    }

    public void setCover(String cover) {
        this.cover = cover;
    }

    @Override
    public String toString() {
        return "Book{" +
                "id=" + id +
                ", author_id=" + author_id +
                ", title='" + title + '\'' +
                ", descriptionShort='" + descriptionShort + '\'' +
                ", descriptionLong='" + descriptionLong + '\'' +
                ", genre='" + genre + '\'' +
                ", cover='" + cover + '\'' +
                ", isFavourite=" + isFavourite +
                '}';
    }
}
