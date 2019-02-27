<?php
defined('BASEPATH') OR exit('No direct script access allowed');
// header("Access-Control-Allow-Origin: *");
// header('content-type: application/json; charset=utf-8');
// header('Access-Control-Allow-Methods: GET, POST');

class laporan_c extends CI_Controller {

	public function __construct() {
		parent::__construct();
    $this->load->model('laporan_m');
  }

  public function index(){
    $this->load->view('test');
  }

  public function get(){
    $dt=$this->laporan_m->selectAll()->result();
		$getJson=[];
		foreach ($dt as $row) {
    	$getJson[]=array(
				"id" => $row->id,
				"judul" => $row->judul,
				"tanggal" => $row->tanggal,
				"jam" => $row->jam,
				"kategori" => $row->kategori,
				"lampiran" => $row->lampiran,
				"keterangan" => $row->keterangan,
				"nama_author" => $row->nama_author,
				"nohp_author" => $row->nohp_author,
				"confirm" =>$row->confirm
			);
    }
		echo JSON_ENCODE($getJson);
  }

	public function getbyid($id){
    $row = $this->laporan_m->select($id)->result();
    	$getJson=array(
				"id" => $row[0]->id,
				"judul" => $row[0]->judul,
				"tanggal" => $row[0]->tanggal,
				"jam" => $row[0]->jam,
				"kategori" => $row[0]->kategori,
				"lampiran" => $row[0]->lampiran,
				"keterangan" => $row[0]->keterangan,
				"nama_author" => $row[0]->nama_author,
				"nohp_author" => $row[0]->nohp_author,
				"confirm" =>$row[0]->confirm
			);
		echo JSON_ENCODE($getJson);
  }

	public function add(){
		$data=$this->input->post();
		return $this->laporan_m->insert($data);
	}

	public function do_upload(){
		$new_name = time().$_FILES["lampiran_in"]['name'];
		$config['file_name'] = $new_name;
		$config['upload_path']= './asset/image';
		$config['allowed_types']= 'gif|jpg|png';
		$this->load->library('upload', $config);
		if($this->upload->do_upload('lampiran_in')){
			$json = $this->upload->data('file_name');
		}else{
			$json=$this->upload->display_errors();
		}

		echo $json;
	}

	public function confirm($token) {
		$data=array('confirm' => true, );
		$this->laporan_m->update($data,$token);
		$this->load->view('result');
	}

}
