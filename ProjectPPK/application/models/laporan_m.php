<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class laporan_m extends CI_Model {

  public function selectAll(){
    $this->db->order_by('id', 'desc');
    return $this->db->get('laporan');
  }

  public function insert($data)
  {
    $this->db->set($data);
    $this->db->insert('laporan');
  }

  public function select($id)
  {
    return $this->db->get_Where('laporan', array('id'=> $id));
  }

  public function update($data,$token)
  {
    $this->db->where('token', $token);
    $this->db->update('laporan', $data);
  }
}
