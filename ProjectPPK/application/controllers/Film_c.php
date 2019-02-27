<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Film_c extends CI_Controller {

	public function __construct() {
		parent::__construct();
    $this->load->model('Film_m');
  }

  public function index(){
    $this->load->view('test');
  }

  public function getJsonAllFilm(){
    $dt=$this->Film_m->selectAll()->result();
		$getJson=[];
		foreach ($dt as $row) {
    	$getJson[]=array(
				"id" => $row->id,
				"judul" => $row->judul,
				"kategori" => explode(",",$row->kategori)
			);
			//$getJson[]=$data;
    }
		echo JSON_ENCODE($getJson);
  }
}
