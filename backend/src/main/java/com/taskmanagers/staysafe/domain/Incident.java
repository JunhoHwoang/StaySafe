package com.taskmanagers.staysafe.domain;

import com.opencsv.bean.CsvBindByName;
import lombok.Data;

@Data
public class Incident {

    @CsvBindByName(column = "OBSRVTN_NB")
    private int id;

    @CsvBindByName(column = "DATETIME_DTM")
    private String date;

    @CsvBindByName(column = "PNT_NM")
    private String criteria;

    @CsvBindByName(column = "QUALIFIER_TXT")
    private String observations;

    @CsvBindByName(column = "PNT_ATRISKNOTES_TX")
    private String risks;

    @CsvBindByName(column = "PNT_ATRISKFOLWUPNTS_TX")
    private String solution = null;

}
