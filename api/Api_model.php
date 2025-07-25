<?php
class MyClass{
  public function insert_contact($contactData)
  {
      $this->db->insert('contacts', $contactData);
      return $this->db->insert_id();
  }
}
?>